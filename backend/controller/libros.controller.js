import {ObjectId} from "mongodb";

import conexion from "../database/connection.js";

const getLibros = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('libros');

        const result = await coleccion.find().toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const getOneLibro = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('libros');

        const id = req.params.id;

        const objId = new ObjectId(id);

        const result = await coleccion.find({_id : objId}).toArray();

        res.json(result);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const postLibro = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('libros');

        const nombre = await coleccion.find({"nombre" : req.body.nombre}).toArray();

        if (nombre[0]){
            return res.status(400).json({
                ms : "El libro ya se encuentra registrado"
            })
        }

        const newLibro = await coleccion.insertOne({
            "nombre" : req.body.nombre,
            "genero" : req.body.genero,
            "autor" : req.body.autor,
            "sinopsis" : req.body.sinopsis,
            "estado" : req.body.estado
        })
    
        res.json(newLibro);
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