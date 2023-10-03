import conexion from "../database/connection.js";

const getLibros = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;

        const coleccion = db.collection(colection);

        const result = await coleccion.find().toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const getOneLibro = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;
        const id = parseInt(req.params.id);

        const coleccion = db.collection(colection);

        const result = await coleccion.find({id}).toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const postLibro = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;

        const coleccion = db.collection(colection);

        if (colection == 'libros'){
            const nombre = await coleccion.find({nombre : req.body.nombre}).toArray();

            if (nombre[0]){
                return res.status(400).json({
                    ms : "El libro ya se encuentra registrado"
                })
            }
    
            const newLibro = await coleccion.insertOne(req.body)

            res.json(newLibro);
        } else if (colection == 'usuarios'){
            const correo = await coleccion.find({correo : req.body.correo}).toArray();

            if (correo[0]){
                return res.status(400).json({
                    ms : "El correo ya se encuentra registrado"
                })
            }

            const newUser = await coleccion.insertOne(req.body);

            res.json(newUser);
        }
    } catch (error) {
        res.stauts(400).json(error.message);
    }
}

const updateLibro = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('libros');

        const data = req.body;
        const id = req.params.id;

        const objId = new ObjectId(id);

        await coleccion.findOneAndUpdate({_id : objId}, {$set : data});

        res.json({
            msg : "Libro actualizado"
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const delLibro = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('libros');

        const id = req.params.id;
        const objId = new ObjectId(id);

        await coleccion.deleteOne({_id : objId});

        res.json({
            msg : "Libro eliminado exitosamente"
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getLibros,
    getOneLibro,
    postLibro,
    updateLibro,
    delLibro
}