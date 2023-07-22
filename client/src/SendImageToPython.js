import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
const api = 'http://127.0.0.1:5000/';

export  function  sendImage(image){
  const formData =  new FormData();
  formData.append('image', image);
  const Upload = async() => {
    await fetch(api + 'image', {
      method: 'POST',
      body: formData
    }).then(resp => {
      resp.json().then(data => {console.log(data)})
    })
  }
  Upload();
}

export default function SendImageToPython() {
    let img = useSelector((state) => state.ImageReducer);
    let fd = new FormData();
    fd.append('image', img.content);
    console.log(img);

    
   
    
        const api = 'http://127.0.0.1:5000/';
        return (<>
            {sendImage()}

        </>)
    }
