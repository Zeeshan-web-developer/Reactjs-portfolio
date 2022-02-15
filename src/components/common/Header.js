import React from 'react';
import Styles from './Header.module.css';
import { Card,CardBody } from 'reactstrap';
const Header = ({ title }) => <div className={Styles.header}>
    <div className={Styles.text}>{title}</div>
</div>;


export default Header;
