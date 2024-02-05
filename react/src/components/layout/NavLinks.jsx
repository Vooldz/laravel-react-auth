/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom'

const NavLinks = ({ style }) => (
    <ul className={`flex ${style}`}>
        {["link1", "link2", "link3", "link4"].map(link => (
            <li key={link}><Link to={link} className="button icon">{link}</Link></li>
        ))}
    </ul>
)

export default NavLinks