import { useEffect, useState } from "react";

export default function deleteInspectorById(inspectorID) {
  const api = 'http://127.0.0.1:5000/';
  fetch(api + 'inspectors/' + inspectorID, { method: 'DELETE' })
    .catch((err) => {
      console.log(err.message);
    });
}
export function addNewInspector(newInspector) {
  const api = 'http://127.0.0.1:5000/';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newInspector: newInspector })
  };
  fetch(api + 'inspectors', requestOptions)
    .then(response => response.json())
  // .then(console.log(data));

}

export function ConnectionToPython() {
  const api = 'http://127.0.0.1:5000/';
  const [inspectors, setInspectors] = useState([]);
  const [inspector, setInspector] = useState([]);

  const getAllInspectors = () => {
    fetch(api + '/inspectors')
      .then((res) => res.json())
      .then((data) => {
        setInspectors(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const getInspectorById = (inspectorID) => {
    fetch(api + inspectorID)
      .then((res) => res.json())
      .then((data) => {
        setInspector(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }




  useEffect(() => {
    getInspectorById('546545645');
    getAllInspectors();

  }, []);
  deleteInspectorById('098787234');

  return (
    <>
      <h1> get by id </h1>
      {<p> {inspector.first_name + " " + inspector.last_name + " " + inspector.number_id} </p>}
      <h1> get all </h1>
      {
        inspectors.map(inspector => { return (<p> {inspector.first_name + " " + inspector.last_name + " " + inspector.number_id}</p>) })
      }
    </>)

}