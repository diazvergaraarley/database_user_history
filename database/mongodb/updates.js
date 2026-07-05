// =====================================================
// USAR LA BASE DE DATOS
// =====================================================

use("streamhub");

// =====================================================
// ACTUALIZAR UNA PELÍCULA
// updateOne()
// =====================================================

db.peliculas.updateOne(

    { titulo: "Interestelar" },

    {
        $set: {
            genero: "Ciencia ficción"
        }
    }

);

// Verificar

db.peliculas.find({

    titulo: "Interestelar"

});

// =====================================================
// ACTUALIZAR VARIOS USUARIOS
// updateMany()
// =====================================================

db.usuarios.updateMany(

    { premium: false },

    {
        $set: {
            premium: true
        }
    }

);

// Verificar

db.usuarios.find({

    premium: true

});

// =====================================================
// ELIMINAR UNA PELÍCULA
// deleteOne()
// =====================================================

db.peliculas.deleteOne({

    titulo: "Shrek"

});

// Verificar

db.peliculas.find();

// =====================================================
// ELIMINAR USUARIOS CON MENOS DE 5 CONTENIDOS VISTOS
// deleteMany()
// =====================================================

db.usuarios.deleteMany({

    contenidos_vistos: {

        $lt: 5

    }

});

// Verificar

db.usuarios.find();