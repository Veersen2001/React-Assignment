import axios from 'axios'
import { useEffect, useState } from 'react';
import './ImagesList.css';
import ImageShow from '../ImageShow/ImageShow';
function ImageList()
{
    const [imageList, setImageList] = useState([]);

    const[isLoading, setIsLoading] = useState(true);
   const ImageURL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=22'
    async function downloadImages()
    {
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
     
      // console.log(res);
      // console.log(imageList);

       setIsLoading(false);
    }

    useEffect(()=>{
        downloadImages();
    },[]);

    return(
      <div className="images-list-wrapper">
        
        <div className="images-list">
         
          {(isLoading) ? <h1 className='image-loading'>Images Loading.....</h1> : imageList.map((p)=><ImageShow  title={p.title} image={p.image} key={p.id} id={p.id} />)}
        </div>
        
      </div>
   
  );

}

export default ImageList;