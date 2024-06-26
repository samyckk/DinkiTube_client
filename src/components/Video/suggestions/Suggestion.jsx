import axios from "axios";
import { useEffect, useState } from "react";
import SuggestCard from "./SuggestCard";

const Suggestion = ({tags})=>{
    
    const [allVids, setAllVids] = useState([]);
    useEffect(()=>{
        const getVideos = async()=>{
            await axios.get(`https://dinki-tube-server.vercel.app/api/videos/tags?tags=${tags}`).then((res)=>{
                setAllVids(res.data);
            }
            );
        }
        
        getVideos();
    },[tags]);

    return(
        <div className="mt-6 ml-4">
            {allVids.map((vid)=>{
               return <SuggestCard key={vid._id} vid = {vid}/>
            })}
        </div>
    )
}

export default Suggestion;
