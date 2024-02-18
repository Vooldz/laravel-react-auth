/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom'

const NavLinks = ({ style }) => (
    <ul className={`flex ${style}`}>
        {["Home", "shpping", "contact us"].map(link => (
            <li key={link}><Link to={link === "Home" ? '/' : link} className="button icon">{link}</Link></li>
        ))}
    </ul>
)

export default NavLinks