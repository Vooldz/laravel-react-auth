import { Link } from "react-router-dom";

// icons 
import { FaRegUserCircle } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiInboxArchiveFill } from "react-icons/ri";

// style
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="nav-top">
                <div className="container flex">
                    <div className="flex">
                        <button className="icon">button1</button>
                        <button className="icon">button2</button>
                    </div>
                    <div className="flex">
                        <Link className="button icon" to={'/profile'}><FaRegUserCircle /></Link>
                        <Link className="button icon" to={'/inbox'}><RiInboxArchiveFill /></Link>
                        <select className="button icon" name="lang" id="lang">
                            <option value="english">english</option>
                            <option value="arabic">arabic</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="nav-center">
                <div className="container flex">
                    <button className="icon"><h1 className="flex"><FaDropbox color="green" /> Logo</h1></button>
                    <ul className="flex">
                        {["link1", "link2", "link3", "link4"].map(link => (
                            <li key={link}><Link to={link} className="button icon">{link}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="container flex">
                    <select name="categories" id="categories" className="button transparent">
                        <option value="electronics">electronics</option>
                        <option value="clothes">clothes</option>
                    </select>
                    <div className="flex full transparent">
                        <input type="text" placeholder="Search..." />
                        <button className="icon"><IoMdSearch color="white" /></button>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header