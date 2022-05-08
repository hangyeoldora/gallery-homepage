/* eslint-disable */
import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navBtn, setNavBtn] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <ul className="nav-wrap">
          <li className="nav-click">
            <FontAwesomeIcon
              icon={faBars}
              className="nav-icon"
              onClick={() => {
                navBtn === false ? setNavBtn(true) : setNavBtn(false);
              }}
            />
          </li>
          <li className="nav-li" onClick={()=>{navigate('/about')}}>about</li>
          {/* <Link to="/about">about</Link> */}
          <li className="nav-li">exhibition</li>
        </ul>
        <div className="logo">
          <img
            src={
              process.env.PUBLIC_URL + "/images/logo/523kunstdoc_mini_logo.png"
            }
            onClick={()=>{ navigate('/')}}
          />
        </div>
        <div className="contact">
          <p>contact</p>
        </div>
      </div>
      {navBtn === true ? (
        <div className="navmenu">
          <ul>
            <li
              onClick={() => {
                navBtn === true ? setNavBtn(false) : setNavBtn(true);
              }}
            >
              <FontAwesomeIcon className="nav-xmark" icon={faXmark} />
            </li>
            <li>about</li>
            <li>exhibitions</li>
            <li>news</li>
            <li>contact</li>
          </ul>
          <div className="nav-sns">
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
