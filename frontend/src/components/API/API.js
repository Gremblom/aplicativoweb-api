import React, {useEffect, useState} from "react";
import axios from "axios";

function Read(coleccion){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6996/api/${coleccion}/all`)
            .then((response)=>{
                setAPIData(response.data);
            })
    }, []);

    const  getData = ()=>{
        axios.get(`http://localhost:6996/api/${coleccion}/all`)
            .then((getData)=>{
                setAPIData(getData.data);
            })
    }

    return APIData;
}

function ReadOne(coleccion, id){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6996/api/${coleccion}/one/${id}`)
            .then((response)=>{
                setAPIData(response.data)
            })
    }, [])

    const getData = ()=>{
        axios.get(`http://localhost:6996/api/${coleccion}/one/${id}`)
            .then((getData)=>{
                setAPIData(getData.data)
            })
    }

    return APIData;
}

export {
    Read,
    ReadOne
}