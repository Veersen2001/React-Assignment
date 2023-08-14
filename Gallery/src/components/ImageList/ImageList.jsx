import axios from 'axios'
import { useEffect, useState } from 'react';
import './ImagesList.css';
import ImageShow from '../ImageShow/ImageShow';
import {  useNavigate } from 'react-router-dom';
function ImageList()
{
  //  images List state
    const [imageList, setImageList] = useState([]);
    
    // image Loading State
    const[isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    // Images API url
   const ImageURL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=30'
    async function downloadImages()
    {
      try{

        const response = await axios.get(ImageURL);
        
        //  console.log(response.data);
        
        const ImagesResult = response.data.photos;
        
        const res = ImagesResult.map((img)=>{
          
          return{
            id:img.id,
            image:img.url,
            title:img.title
            
          }
          
        })
        setImageList(res); 
        setIsLoading(false);    
      }
      catch(err){
         if(err)
         {
            navigate('*');
           setIsLoading(false);
         }
      }

     
      // console.log(res);
      // console.log(imageList);

       
    }

    useEffect(()=>{
        downloadImages();
    },[]);

    return(
      <div className="images-list-wrapper">
        
        <div className="images-list">
         
          {(isLoading) ? <div className="center">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div> : imageList.map((p)=><ImageShow  title={p.title} image={p.image} key={p.id} id={p.id} />)}
        </div>
        
      </div>
   
  );

}

export default ImageList;