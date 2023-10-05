import conexion from "../database/connection.js";

const get = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;

        if (colection == 'libros'){
            const coleccion = db.collection(colection);

            const result = await coleccion.aggregate([
                {$lookup : {
                    from : 'generos',
                    localField : 'genero',
                    foreignField : 'id',
                    as : 'genero'
                }},
                {$project : {
                    _id : 0,
                    nombre : 1,
                    genero : 1,
                    autor : 1,
                    sinopsis : 1,
                    estado : 1,
                    id : 1,
                    genero : "$genero.nombre"
                }}
            ]).toArray();

            res.json(result);
        } else {
            const coleccion = db.collection(colection);

            const result = await coleccion.find().toArray();

            res.json(result);
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const getOne = async (req, res)=>{
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

const post = async (req, res)=>{
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
        } else if (colection == 'generos'){
            const nombre = await coleccion.find({nombre : req.body.nombre}).toArray();

            if (nombre[0]){
                return res.status(400).json({
                    ms : "La categoria ya se encuentra registrada"
                })
            }

            const newGenre = await coleccion.insertOne(req.body);

            res.json(newGenre);
        }
    } catch (error) {
        res.stauts(400).json(error.message);
    }
}

const update = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;
        const idP = parseInt(req.params.id);

        const {id, ...data} = req.body;

        console.log(data);

        const coleccion = db.collection(colection);

        await coleccion.findOneAndUpdate({id : idP}, {$set : data});

        res.json({
            msg : "Documento actualizado"
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleter = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;
        const id = parseInt(req.params.id);

        const coleccion = db.collection(colection);

        console.log(id);

        await coleccion.findOneAndDelete({id});

        res.json({
            msg : "Documento eliminado exitosamente"
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    get,
    getOne,
    post,
    update,
    deleter
}