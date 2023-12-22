import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';



const Header = (props) => {

    const [show, setshow] = useState(false);

    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false)
    function handleclick(a) {
        props.onData(a);
    }

    return (
        <div>
        <div className='header dn'>
            <div className='mx-w df jcsb'>
                <div className='df '>
                    <div className=''>
                        <button className='' variant="primary" onClick={handleShow}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <Offcanvas show={show} onHide={handleClose} className="offcl ">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title className='offcl'><img src='./image/flipkart-logo.png' style={{ width: '6rem', }} /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div>
                                    <div>
                                        <button className='offbtn'>
                                            <FontAwesomeIcon icon={faUser} style={{ color: "#fff", paddingRight: "6px" }} />
                                            Login
                                        </button>
                                    </div>
                                    <div>
                                        <button className='offbtn'>
                                            <FontAwesomeIcon icon={faStore} style={{ color: "#fff", paddingRight: "6px" }} />
                                            Become a Seller
                                        </button>
                                    </div>
                                    <div>
                                        <button className='offbtn' onClick={props.onTriggerpopup}> <FontAwesomeIcon
                                            icon={faCartShopping}
                                            style={{
                                                color: "#e6efec",
                                                paddingRight: "5px",
                                                fontSize: "15px",
                                                cursor: "pointer",
                                            }}
                                        />Card {props.headerCount}</button>
                                    </div>

                                    <Dropdown className='offbtn'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fff", paddingRight: "6px" }} />
                                            Products
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={() => {
                                                handleclick("all");
                                            }}>All</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => {
                                                handleclick("fruit");
                                            }}>Fruits</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={() => {
                                                handleclick("veg");
                                            }}>Vegtables</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={() => {
                                                handleclick("chilli");
                                            }}>Chicken Masala</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>
                    <div className='pd'>
                    <img src='./image/flipkart-logo.png'/>
                    
                    </div>
                </div>
                <div className='d-none'>
                    <button onClick={props.onTriggerpopup} >  <FontAwesomeIcon
                        icon={faStore}
                        style={{
                            color: "#e6efec",
                            paddingRight: "5px",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    /></button>

                </div>
                <div >
                    <button style={{backgroundColor : 'blue'}} >  <FontAwesomeIcon
                        icon={faStore}
                        style={{
                            color: "#e6efec",
                            paddingRight: "5px",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    /></button>

                </div>
                <div >
                    <button onClick={props.onTriggerpopup} >  <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{
                            color: "#e6efec",
                            paddingRight: "5px",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    />{props.headerCount}</button>

                </div>
                <div>
                <Dropdown className='d-n'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fff", paddingRight: "6px" }} />
                                            Products
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={() => {
                                                handleclick("all");
                                            }}>All</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => {
                                                handleclick("fruit");
                                            }}>Fruits</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={() => {
                                                handleclick("veg");
                                            }}>Vegtables</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={() => {
                                                handleclick("chilli");
                                            }}>Chicken Masala</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                </div>

                <div>
                    <button><FontAwesomeIcon icon={faUser} style={{ color: "#fff", paddingRight: "6px" }} />Login</button>
                </div>
            </div>
            <div className='mx-w'>
                <div className='input'>
                    <input placeholder='Search for product,Brands and More...' />

                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Header;
