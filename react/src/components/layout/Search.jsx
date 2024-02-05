/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import axiosClient from "../../axiosClient"
// import axios from "axios"

// icons
import { IoMdSearch } from 'react-icons/io'

const Search = ({ style }) => {
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axiosClient.get(`/products?name=${searchTerm}`).then(response => {
            console.log(response.data.data);
            // if (response.status === 200) {
            // }
        })
    }, [searchTerm])


    return (
        <div className={`flex ${style}`}>
            <div className="flex full-width transparent">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search..." />
                <button className="icon"><IoMdSearch color="white" /></button>
            </div>
        </div>
    )
}

export default Search