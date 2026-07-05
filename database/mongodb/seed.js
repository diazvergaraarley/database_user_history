// =====================================================
// BASE DE DATOS
// =====================================================

use("streamhub");

// =====================================================
// USUARIOS
// =====================================================

db.usuarios.insertMany([

{
    nombre: "Juan Pérez",
    correo: "juan@email.com",
    pais: "Colombia",
    premium: true,
    contenidos_vistos: 8
},

{
    nombre: "María Gómez",
    correo: "maria@email.com",
    pais: "México",
    premium: false,
    contenidos_vistos: 3
},

{
    nombre: "Carlos Díaz",
    correo: "carlos@email.com",
    pais: "Argentina",
    premium: true,
    contenidos_vistos: 12
},

{
    nombre: "Laura Torres",
    correo: "laura@email.com",
    pais: "Colombia",
    premium: false,
    contenidos_vistos: 6
},

{
    nombre: "Andrés Ruiz",
    correo: "andres@email.com",
    pais: "Perú",
    premium: true,
    contenidos_vistos: 15
}

]);

// =====================================================
// PELÍCULAS
// =====================================================

db.peliculas.insertMany([

{
    titulo: "Interestelar",
    genero: "Ciencia Ficción",
    duracion: 169,
    anio: 2014
},

{
    titulo: "El Padrino",
    genero: "Drama",
    duracion: 175,
    anio: 1972
},

{
    titulo: "Toy Story",
    genero: "Animación",
    duracion: 81,
    anio: 1995
},

{
    titulo: "Avengers Endgame",
    genero: "Acción",
    duracion: 181,
    anio: 2019
},

{
    titulo: "Shrek",
    genero: "Animación",
    duracion: 90,
    anio: 2001
}

]);