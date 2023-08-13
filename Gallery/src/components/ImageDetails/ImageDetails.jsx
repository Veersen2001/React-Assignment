import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ImageDetails.css'
function ImageDetails() {

    const { id } = useParams();
    const [image, setImage] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function downloadImage() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
       
       
        setImage({
            title: response.data.photo.title,
            image: response.data.photo.url,
            description: response.data.photo.description

        })


        
        setIsLoading(false);

    }
    useEffect(() => {
        downloadImage();
    }, []);
     
     return (
       <div className="image-details-wrapper">
            <img src={image.image} alt="" />
            <div className="title-description-wrapper">
            <div className="image_title"> {image.title}</div>
            <div className="image-description">{image.description}</div>

            </div>

       </div>
    
    );
    
}

export default ImageDetails;