import React, { useEffect, useState } from 'react';

export const useDataFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data))
    }, [url]);
    return data;
}