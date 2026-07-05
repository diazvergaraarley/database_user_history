// =====================================================
// USAR LA BASE DE DATOS
// =====================================================

use("streamhub");

// =====================================================
// AGRUPAR PELÍCULAS POR GÉNERO
// =====================================================

db.peliculas.aggregate([

{

    $match: {

        duracion: { $gt: 120 }

    }

},

{

    $project: {

        _id: 0,

        titulo: 1,

        genero: 1,

        duracion: 1

    }

}

]);

// =====================================================
// CONTAR USUARIOS POR PAÍS
// =====================================================

db.usuarios.aggregate([

{

    $group: {

        _id: "$pais",

        usuarios: {

            $sum: 1

        }

    }

},

{

    $sort: {

        usuarios: -1

    }

}

]);