import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetails()
{

    const {id} = useParams();
    const [image, setImage] = useState({});

     async function downloadImage()
     {
         const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);

         
         const res =setImage({
            title:response.data.title
         })
    
          console.log(res);
          
          
    }
        useEffect(()=>
        {
            downloadImage();
        },[]);
        
        return(
      <>
       details
      </>
    );
}

export default ImageDetails;