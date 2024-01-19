import React, { useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";

function Github()
{
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://github.com/sn212787')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return(
    
        <div className="txt-center m-4 bg-grey-600 text-white p-4 text-3xl">Github Followers: {data.followers}
        <img src={data.avator_url} alt="git picture" width={300} />
        </div>
        
        

       
    
    )
}

export default Github

export const githubInfo = async() =>{
    const responce = await fetch('https://github.com/sn212787')
    return responce.json() 
}