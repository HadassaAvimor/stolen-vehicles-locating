import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import gov from './default_logo.png'
import './css/Header.css' 

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const inspector = useSelector((state) => state.InspectorReducer);
  const navigate = useNavigate();
  return (
    <MDBNavbar expand="lg" light bgColor="light">

      <MDBContainer fluid >
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle 
                tag="a"
                className="nav-link d-flex align-items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>

              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownItem onClick={() =>{console.log(inspector.profile)}}>עריכת פרטים</MDBDropdownItem>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigate('/')}>יציאה</MDBDropdownItem>

                </MDBDropdownItem>
                <MDBDropdownItem>

                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
      <img src={gov} width={'40px'} height={'40px'}></img>

    </MDBNavbar>

  );


}