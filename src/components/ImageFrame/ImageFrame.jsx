import { useImageSize } from 'react-image-size'
import './imgframe.css'

function ImageFrame({imgsrc,fun}) {
    let x = 0
    const [dimensions] = useImageSize(imgsrc+".jpg") 
    if(dimensions?.height>dimensions?.width) x = 1
    
    return (
      <div className="imageFrame" onClick={()=>{fun(imgsrc)}}>
        <img src={imgsrc+".jpg"} className={x ? "verticalImage" : "horizontalImage"}/>
      </div>
    )
  }
  
  export default ImageFrame