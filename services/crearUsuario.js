const db = require('../models')
const bcryp = require('bcrypt')

async function crearUsuario(usuario) {
    if (!usuario.nombre) throw new Error('Nombre no especificado')
    if (!usuario.p_apellido) throw new Error('Primer apellido no especificado')
    if (!usuario.s_apellido) throw new Error('Segundo apellido no especificado')
    if (!usuario.email) throw new Error('Email no especificado')
    if (!usuario.password) throw new Error('Password no especificada')

    return await db.usuario.crearUsuario
    ...usuario,
        password: bcryp.hashSync(usuario.password, 10)
}

module.exports = { crearUsuario }