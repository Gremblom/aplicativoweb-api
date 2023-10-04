import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Read(coleccion){
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
