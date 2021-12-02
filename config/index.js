module.exports = {
  "development": null,
  "test": {
    uri: 'postgres://test_user:test_pwd@localhost:5432/test_db',
    dbOptions: {
      define: {
        timestamps: true,
        paranoid: true
      }
    },
    server: {
      port: process.env.PORT || 3000
    }
  },
  "production": null
}
