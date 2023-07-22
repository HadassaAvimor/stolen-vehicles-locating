import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deleteInspectorById from "./ConnectionToPython";
import { useNavigate } from "react-router-dom";
export default function Reports() {
    const navigate = useNavigate();
    let id;
    const api = 'http://127.0.0.1:5000/';
    const [reports, setreports] = useState([]);
    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    const getAllReports = () => {
        fetch(api + 'reports')
       
            .then((res) => res.json()
            )
            .then((data) => {
                setreports(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (<>
            <button className="btn btn-warning" onClick={() => { navigate('/admin') }}> חזרה למסך הבית </button>

        {getAllReports()}
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <td>  מחיקת דוח </td>
                    <td>  תאריך </td>
                    <td>  מספר פקח </td>
                    <td> אזור </td>
                    <td> צבע רכב </td>
                    <td>מספר רישוי </td>
                </tr>
            </thead>

            {reports.map((rep) => (
                <tbody>
                    <tr>
                    <td>
                            <button onClick={(rep)=>{handleShowDelete()
                             }}> מחק 
                            <Modal show={showDelete} onHide={handleCloseDelete} animation={false}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>האם אתה בטוח שברצונך להסיר  את הדוח מהמערכת? לאחר המחיקה לא תוכל לשחזר את הנתונים</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseDelete}>
                                        לא
                                    </Button>
                                    <Button variant="primary" onClick={()=>{
                                    deleteInspectorById(rep.number_id)
                                    console.log('deleteeee')
                                    handleCloseDelete()
                                    }}>
                                        כן
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            </button>
                        </td>
                        <td>
                            {rep.date}
                        </td>
                        <td>
                            {rep.inspector_id}
                        </td>
                        <td>
                            {rep.area}
                        </td>
                        <td>
                            {rep.car_color}
                        </td>
                        <td>
                            {rep.license_plate}
                        </td>
                       
                    </tr>
                </tbody>


            ))}
        </table>
    </>)

};