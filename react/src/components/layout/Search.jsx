/**
 * working on this component is stoped till adding the search logic in the backend!
 */

/* eslint-disable react/prop-types */
import { useState } from 'react'

// icons
import { IoMdSearch } from 'react-icons/io'

const Search = ({ style }) => {
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <div className={`box ${style}`}>
            <div className="box full-width transparent">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search..." />
                <button className="icon"><IoMdSearch color="white" /></button>
            </div>
        </div>
    )
}

export default Search