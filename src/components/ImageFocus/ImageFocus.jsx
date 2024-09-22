import './imgfocus.css'
import { useImageSize } from 'react-image-size'
import imageTexts from '../../assets/imageTexts.json'

function ImageFocus({n,source,delfun}) {
    let x = 0
    const [dimensions] = useImageSize(source+".jpg") 
    if(dimensions?.height>dimensions?.width) x = 1

    return (
      <div className="imageFocus" onClick={()=>{delfun(-1)}}>
        <div id="arrowLeft" onClick={(e)=>{
            delfun((a)=> a==0 ? a=n-1 : a=a-1)
            e.stopPropagation()
            }}></div>
        <div id={x ? "veryBadDivV" : "veryBadDivH"}>
            <div id="jestemZłymBardzoBardzoZłymPrzyciskiem">&#10006;</div>
            <img alt={imageTexts[source].alt} src={source+".jpg"} onClick={(e)=>{e.stopPropagation()}} className={x ? "imageV" : "imageH"}/>
            <div id="imageText">{imageTexts[source].desc}</div>
        </div>
        <div id="arrowRight" onClick={(e)=>{
            delfun((a)=> a==n-1 ? a=0 : a=a+1)
            e.stopPropagation()
        }}></div>
      </div>
    )
  }
  
  export default ImageFocus