import React, { useState } from 'react';
import Webcam from 'react-webcam';
import '../../style/Camera.css';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonChecked'
// const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Camera = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  })
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <button    
      type='radio'     
       className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
>
        </button>
    </div>
  );

}
export default Camera