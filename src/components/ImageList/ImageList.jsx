import ImageFrame from "../ImageFrame/ImageFrame"
import './imglist.css'
function ImageList({n,setfun}) {
    
    return (
      <div className="imgList">
        {[...Array(n)].map((e,i)=> <ImageFrame imgsrc={i} fun={setfun}/>)}
      </div>
    )
  }
  
  export default ImageList