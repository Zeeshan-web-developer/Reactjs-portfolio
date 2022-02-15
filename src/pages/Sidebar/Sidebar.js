import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
} from "reactstrap";
 import Photo from "../../assets/img/profile.png";
import List from "../../components/List";
import Styles from './Sidebar.module.css';
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={Styles.sidebar__container}>
       
      <div className={Styles.sidebar__content} >
       <div className="d-none d-md-block">
          <div className={Styles.image}>
             <img src={Photo} alt="profile-pic" style={{ alignSelf:"center",maxWidth: "10rem", maxHeight: "10rem", borderRadius:"50%",  border: "2px solid black" }} />
        <h4 className={Styles.profile__name}>Zeeshan Ahmad</h4>
         </div>
        </div>
          <Navbar color="light" light expand="md" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <div className="mr-auto" navbar className={Styles.list__wrapper}>
              <div className={Styles.list}>
                <List title="Home" />
              <List title="About" />
              <List title="Contact" />
              </div>
            
          </div>
        </Collapse>
      </Navbar>
    
    </div>
      
    </div>
  )
};





export default Sidebar;
