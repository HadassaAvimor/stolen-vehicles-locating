import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { sendImage } from './SendImageToPython'
import './css/camera.css'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const _Image_ = () => {
const [picture,setPicture] = useState('');
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    sendImage(webcamRef.current.getScreenshot())
    setPicture(webcamRef.current.getScreenshot())
  })
  return (
    <div className='wrapper'>
          
        
        {true? (
          <Webcam 
          className='wrapper'
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          
        ) : (
          <img src={ picture} height={"600"} width={"600"}></img>
         )}
      
      <div>

        {picture != '' ? (
          <button
            onClick={() => {
              capture();
              return (<div style={{borderStyle:"groove", borderColor:"white"}}>
              <img src={ picture} height={"600"} width={"600"} />
            </div>)
            }}
          >
            Retake
          </button>
        ) 
        : (
          <button
          className="webcamCapture__button"
          onClick={capture}
          fontSize="large"
        >
        </button>
  
        )}
      </div>

   
      
    </div>
  )
}

export default _Image_