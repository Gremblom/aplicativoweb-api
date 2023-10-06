import {useEffect, useState} from "react";
import axios from "axios";

function Read(coleccion){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:6996/apiSpfc/${coleccion}/all`)
            .then((response)=>{
                setAPIData(response.data);
            })
    }, [coleccion]);

    return APIData;
}

export {
    Read
}