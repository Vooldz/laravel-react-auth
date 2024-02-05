/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

// icons 
import { FaRegUserCircle } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

// style
import './header.css'

// components
import Popup from "../popup/Popup";
import Search from "../layout/Search";
import NavLinks from "../layout/NavLinks";

const Header = () => {
    const [popupType, setPopupType] = useState(null)
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (type) => {
        setPopupType(type);
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className="nav-top hidden-in-small">
                <div className="container flex">
                    <div className="flex">
                        <button className="icon">button1</button>
                        <button className="icon">button2</button>
                    </div>
                    <div className="flex">
                        <Link className="button icon" to={'/profile'}><FaRegUserCircle /></Link>
                        <button className="icon" onClick={() => openModal("window")}><RiInboxArchiveFill /></button>
                        <select className="button icon" name="lang" id="lang">
                            <option value="english">english</option>
                            <option value="arabic">arabic</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="nav-center">
                <div className="container flex">
                    <button className="icon simple"><h1 className="flex"><FaDropbox />VOOLDZ</h1></button>
                    <NavLinks style={"row"} />
                    <div className="flex hidden-in-large">
                        <button className="icon" onClick={() => openModal("window-search")}><IoMdSearch /></button>
                        <Link className="button icon" to={'/profile'}><FaRegUserCircle /></Link>
                        <button className="icon" onClick={() => openModal("window-products")}><RiInboxArchiveFill /></button>
                        <button className="icon" onClick={() => openModal("list")}><MdMenu /></button>
                    </div>
                </div>
            </div>
            <div className="nav-bottom hidden-in-small">
                <Search style={'container'} />
            </div>
            <Popup isOpen={isOpen} openModal={openModal} type={popupType} />
        </header>
    )
}

export default Header