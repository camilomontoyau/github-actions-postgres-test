module.exports = {
  "development": null,
  "test": {
    uri: 'postgres://localhost/runner',
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
