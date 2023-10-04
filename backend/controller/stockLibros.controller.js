import conexion from "../database/connection.js";

const colection = 'stockLibros'

const getAll = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection(colection);
    
        const response = await coleccion.aggregate([
            {$lookup : {
                from : 'libros',
                localField : 'id_libro',
                foreignField : 'id',
                as : 'libro'
            }},
            {$project : {
                _id : 0,
                cantidad_disponible : 1,
                precio_unitario : 1,
                id : 1,
                libroNombre : "$libro.nombre",
                libroEstado : "$libro.estado"
            }}
        ]).toArray();
    
        res.json(response)   
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAll
}