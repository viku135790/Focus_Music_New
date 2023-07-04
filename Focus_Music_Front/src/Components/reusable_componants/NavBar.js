import React, { useEffect, useState } from 'react';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const [opneIcon, setOpenIcon] = useState(false)
    function handleOpneCloseNavbar() {
        setOpenIcon(!opneIcon)
    }

//    useEffect(()=>{
//     const handleResize=()=>{
//         window.location.reload();
//     }

//     window.addEventListener("resize", handleResize);

//     return()=>{
//         window.removeEventListener("resize" , handleResize);
//     };

//    },[])


    return (
        <div className='nav-main-conta'>
            <div className='comp-logo'></div>
            <div className={opneIcon ? "option-item-open" : 'option-item'}>
                <ul>
                    <li><NavLink to="/" className="nav-navlink-route">Home</NavLink></li>
                    <li><NavLink className="nav-navlink-route">Music</NavLink></li>
                    <li><NavLink className="nav-navlink-route">Video</NavLink></li>
                    <li><NavLink className="nav-navlink-route">News</NavLink></li>
                    <li><NavLink className="nav-navlink-route">About</NavLink></li>
                </ul>
            </div>
            <div className='icon-nav'>
                <FaFacebook className='facebook-icon' />
                <AiFillInstagram className='instagram-icon' />
                <SiYoutubemusic className='youtube-icon' />
                <AiFillTwitterCircle className='twitter-icon' />
            </div>
            <div className="menu-icon">
                {opneIcon ? (
                    <ImCross color='white' onClick={handleOpneCloseNavbar} />
                ) : (
                    <GiHamburgerMenu color='white' onClick={handleOpneCloseNavbar} />
                )}
            </div>
        </div>
    )
}

export default NavBar