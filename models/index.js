'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { env as _env } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basename = _basename(__filename);
const env = _env.NODE_ENV || 'development';

// Convert the config path to a file URL
const configPath = pathToFileURL(join(__dirname, '/../config/config.js')).href;

let config;
let db = {};

async function initialize() {
  // Dynamically import the config file
  const configModule = await import(configPath);
  config = configModule.default[env];

  let sequelize;
  if (config.use_env_variable) {
    sequelize = new Sequelize(_env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  const modelFiles = readdirSync(__dirname)
    .filter(file => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1
      );
    });

  for (const file of modelFiles) {
    // Convert model file path to a file URL
    const modelPath = pathToFileURL(join(__dirname, file)).href;
    const { default: modelDefinition } = await import(modelPath);
    const model = modelDefinition(sequelize, DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
}

await initialize();

export default db;
