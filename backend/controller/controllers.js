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

const newStock = async (data)=>{
    try {
        const db = await conexion();

        const coleccion = db.collection('stockLibros');
    
        await coleccion.insertOne({
            id : data.id,
            id_libro : data.id,
            cantidad_disponible : 10,
            precio_unitario : 15.99
        })   
    } catch (error) {
        return error;
    }
}

const checkStock = async (id)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('stockLibros');

        const isInStock = await coleccion.find({id_libro : id}).toArray();

        if (isInStock[0].cantidad_disponible == 0){
            return false;
        } else {
            await coleccion.updateOne({id_libro : id}, {$inc : {cantidad_disponible : -1}});
            return true;
        }
    } catch (error) {
        return false   
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

            const newLibro = await coleccion.insertOne(req.body);

            newStock(req.body);

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
        } else if (colection == 'rentas'){
            const bookStock = checkStock(req.body.id_libro);

            if (bookStock){
                const newRent = await coleccion.insertOne(req.body);

                res.json(newRent);
            } else {
                res.json({
                    ms : "El libro no se encuentra disponible en stock"
                })
            }
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

        const coleccion = db.collection(colection);

        await coleccion.findOneAndUpdate({id : idP}, {$set : data});

        res.json({
            msg : "Documento actualizado"
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const delInv = async (id)=>{
    try {
        const db = await conexion();

        const coleccion = db.collection('stockLibros');

        await coleccion.findOneAndDelete({id});
    } catch (error) {
        return error;
    }
}

const updBookStock = async (id)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('stockLibros');

        await coleccion.updateOne({id_libro : id}, {$inc : {cantidad_disponible : +1}});

        return true;
    } catch (error) {
        return false;
    }
}

const deleter = async (req, res)=>{
    try {
        const db = await conexion();

        const {colection} = req.params;
        const id = parseInt(req.params.id);

        if (colection == 'libros'){
            const coleccion = db.collection(colection);

            await coleccion.findOneAndDelete({id});

            delInv(id);

            res.json({
                msg : "Documento eliminado exitosamente"
            });
        } else if (colection == 'rentas') {
            const coleccion = db.collection(colection);

            const rent = await coleccion.find({id}).toArray();

            const bookStock = await updBookStock(rent[0].id_libro);

            if (bookStock){
                await coleccion.findOneAndDelete({id});

                res.json({
                    ms : "Documento eliminado exitosamente"
                })
            } else {
                res.json({
                    ms : 'Ha ocurrido un error inesperado'
                })
            }
        } else {
            const coleccion = db.collection(colection);

            await coleccion.findOneAndDelete({id});

            res.json({
                msg : "Documento eliminado exitosamente"
            });
        }
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