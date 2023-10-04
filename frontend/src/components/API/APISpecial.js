import React, {useEffect, useState} from "react";
import axios from "axios";

function Read(coleccion){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6996/apiSpfc/${coleccion}/all`)
            .then((response)=>{
                setAPIData(response.data);
            })
    }, []);

    const  getData = ()=>{
        axios.get(`http://localhost:6996/apiSpfc/${coleccion}/all`)
            .then((getData)=>{
                setAPIData(getData.data);
            })
    }

    return APIData;
}

export {
    Read
}