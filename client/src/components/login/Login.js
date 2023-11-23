import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import '../../style/Login.css'
import { useSelector, useDispatch } from "react-redux";
// import {setInspector} from './redux/actions/SetInspector'

export default function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const api = 'http://127.0.0.1:5000/';
  // const [inspector, setInspector] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message,setMessage] = useState('');
  const dispatch = useDispatch();
  const alertModel = (str) =>{
    setFirstName('');
    setLastName('');
    setPassword('');
    setMessage(str)
    setShow(true);
  }

  const navigateMode = (inspectorID, inspectorFName, inspectorLName) => {
    fetch(api + `inspectors/${inspectorID}/${inspectorFName}/${inspectorLName} `)
      .then((res) => res.json())
      .then((data) => {
        // setInspector(data);
        if (data === false) {
          alertModel('אין לך הרשאת כניסה למערכת')
        }
        else {
        console.log(data)
          // dispatch(setInspector(data));
          if (data.hasOwnProperty('admin')) {
            console.log("hello admin!")
            navigate('/admin')
          }
          else {
            console.log("hello inspector!");
            navigate('/inspector')

          }
          
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

  }
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();
    if(password.length == 9 & (/[\u0590-\u05FF]/).test(firstName) & (/[\u0590-\u05FF]/).test(lastName)){

    navigateMode(password, firstName, lastName)}
    else{
    alertModel('אנא בדוק שהזנת שם פרטי ומשפחה בעברית, וסיסמא בת 9 ספרות');
    }
  };

  return (
<div className="wrapper fadeInDown">
    <div id="formContent">
      <form onSubmit={handleSubmit}>
        <input
          className="fadeIn third"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="שם פרטי"
          onChange={event => setFirstName(event.target.value)}
          value={firstName}
          required
        />

        <br />
        <input
          className="fadeIn third"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="שם משפחה"
          onChange={event => setLastName(event.target.value)}
          value={lastName}
          required
        />

        <br />

        <input
          className="fadeIn third"
          id="userPassword"
          name="userPassword"
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <br />

        <button className="submit-button" type="submit">כניסה למערכת</button>

      </form>
      <Modal show={show} onHide={() => setShow(false)} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{message} </Modal.Body>
      </Modal>
    </div>
   
    </div>
  )
}