import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import deleteInspectorById from "./ConnectionToPython";
import { useNavigate } from "react-router-dom";
import { addNewInspector } from "./ConnectionToPython";

export default function Inspectors() {
  let id;
  const api = 'http://127.0.0.1:5000/';
  const [inspectors, setInspectors] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [newInspector, setNewInspector] = useState(
    { email: '', fName: '', lName: '', id: '', birth_date: '', phone: '' },
  );
  const [insToDelete, setInsToDelete] = useState('');

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleClosePost = () => setShowPost(false);
  const handleShowPost = () => setShowPost(true);

  const navigate = useNavigate();

  const getAllInspectors = () => {
    fetch(api + 'inspectors')

      .then((res) => res.json()
      )
      .then((data) => {
        setInspectors(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (<>
    <button className="btn btn-warning" onClick={() => { navigate('/admin') }}> חזרה למסך הבית </button>
    <button className="btn btn-warning" onClick={handleShowPost}> הוספת עובד למערכת </button>
    <Modal show={showPost} onHide={handleClosePost}>
      <Modal.Header closeButton>
        <Modal.Title>הוספת פקח למערכת</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>דואר אלקטרוני</Form.Label>
            <Form.Control
              type="email"
              placeholder="Israel@Israeli.com"
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, email: e.target.value })}

            />
            <Form.Label>שם פרטי</Form.Label>
            <Form.Control
              placeholder="ישראל"
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, fName: e.target.value })}

            />
            <Form.Label>שם משפחה</Form.Label>
            <Form.Control
              placeholder="ישראלי"
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, lName: e.target.value })}

            />
            <Form.Label>תעודת זהות</Form.Label>
            <Form.Control
              placeholder="000000000"
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, id: e.target.value })}

            />
            <Form.Label>תאריך לידה</Form.Label>
            <Form.Control
              type="date"
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, birth_date: new Date(e.target.value).toISOString() })}

            />
            <Form.Label>מספר טלפון</Form.Label>
            <Form.Control
              autoFocus
              onBlur={(e) => setNewInspector({ ...newInspector, phone: e.target.value })}

            />

          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClosePost}>
          ביטול
        </Button>
        <Button variant="primary" onClick={() => {
          handleClosePost()
          debugger
          if (newInspector.id.length == 9 &
            (/[\u0590-\u05FF]/).test(newInspector.fName) &
            (/[\u0590-\u05FF]/).test(newInspector.lName) &
            (/\S+@\S+\.\S+/).test(newInspector.email) &
            newInspector.phone.length == 10) {
            addNewInspector(newInspector);

          }
          else {
            alert('אנא הזן פרטים תקינים!');
          }

        }}>
          הוסף
        </Button>
      </Modal.Footer>
    </Modal>
    {getAllInspectors()}
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <td>  מחיקת עובד </td>
          <td>  תאריך לידה </td>
          <td>  מספר טלפון </td>
          <td>  שם משפחה </td>
          <td>  שם פרטי </td>

        </tr>
      </thead>

      {inspectors.map((ins) => (
        <tbody>
          <tr>
            <td>

              <button onClick={() => {
                setInsToDelete(ins.number_id)
                handleShowDelete()
              }}> מחק

              </button>
            </td>
            <td>
              {ins.birth_date}
            </td>
            <td>
              {ins.phone_number}
            </td>
            <td>
              {ins.last_name}
            </td>
            <td>
              {ins.first_name}
            </td>

          </tr>
        </tbody>


      ))}
    </table>
    <Modal show={showDelete} onHide={handleCloseDelete} animation={false}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>האם אתה בטוח שברצונך להסיר  את העובד מהמערכת? לאחר המחיקה לא תוכל לשחזר את הנתונים</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseDelete}>
          לא
        </Button>
        <Button variant="primary" onClick={() => {
          deleteInspectorById(insToDelete)
          setInsToDelete('')
          console.log('deleteeee')
          handleCloseDelete()
        }}>
          כן
        </Button>
      </Modal.Footer>
    </Modal>
  </>)

};