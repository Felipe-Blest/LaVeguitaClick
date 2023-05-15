const app = require('node'),
    port = process.env.port || 3000,
    app = express(),
    db = require('./models')

app.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`)
})

db.sequelize
    .sync({ force: true })
    .then(() => console.log('Conectado a la DB'))
    .catch((e) => console.log(`Error en -> ${e}`))