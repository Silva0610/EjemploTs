"use strict";
function crearUsuario(datos) {
    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        edad: datos.edad,
        activo: datos.activo,
        fechaCreacion: new Date()
    };
}
// Ejemplo de uso
const datosDeEntrada = {
    nombre: "Ana García",
    email: "ana@email.com",
    edad: 28,
    activo: true
};
const nuevoUsuario = crearUsuario(datosDeEntrada);
console.log("Usuario creado:");
console.log(nuevoUsuario);
console.log(`ID: ${nuevoUsuario.id}`);
console.log(`Nombre: ${nuevoUsuario.nombre}`);
console.log(`Email: ${nuevoUsuario.email}`);
console.log(`Fecha de creación: ${nuevoUsuario.fechaCreacion}`);
