module.exports = {
  "development": null,
  "test": {
    uri: process.env.POSTGRES_URL,
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
