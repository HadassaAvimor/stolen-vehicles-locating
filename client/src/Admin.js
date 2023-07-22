import { useNavigate } from "react-router-dom"
export default function Admin() {
  const navigate = useNavigate();
  return (<>
    <div className="d-grid gap-2 mt-3">
      <button className="btn btn-primary" onClick={() => navigate('/inspectors')}>
        ניהול עובדים
      </button>
    </div>
    <div className="d-grid gap-2 mt-3">
      <button className="btn btn-primary" onClick={() => navigate('/reports')}>
        ניהול דוחו"ת
      </button>
    </div>
    <div className="d-grid gap-2 mt-3">
      <button className="btn btn-primary" onClick={() => navigate('/reports')}>
        הוספת תיאור רכב
      </button>
    </div>
  </>)
};