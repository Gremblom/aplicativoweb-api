import conexion from "../database/connection.js";

const colection = 'rentas'

const getAllRentas = async (req, res)=>{
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
            {$lookup : {
                from : 'usuarios',
                localField : 'id_usuario',
                foreignField : 'id',
                as : 'usuario'
            }},
            {$project : {
                _id : 0,
                id : 1,
                libroNombre : "$libro.nombre",
                usuarioNombre : "$usuario.nombre"
            }}
        ]).toArray();
    
        res.json(response)   
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAllRentas
}