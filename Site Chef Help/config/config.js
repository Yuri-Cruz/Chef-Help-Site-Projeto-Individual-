module.exports = {
  production: {
    username: 'araut',
    password: '#Gf48753827821',
    database: 'testada',
    host: 'localhost',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: { 
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
