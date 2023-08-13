import { Link } from 'react-router-dom';
import './ImageShow.css'
function ImageShow({title,image,id})
{
  return(
    <div className="imageShow">
      <Link className='link' to={`/photos/${id}`}>
        <div className="images-img"><img src={image} alt="img" /></div>
        <div className="image-title">{title}</div>
      </Link>
    </div>
  )
}
export default ImageShow;