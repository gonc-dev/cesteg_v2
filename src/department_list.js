import React from 'react'
import client from './client'
import {useState, useEffect} from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const DepartmentList = (props) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        client.getEntries({
            content_type: 'productCategory',
        }).then(res =>{
            setCategories(res.items)
        });

    }, [])

    return (
        <Router>
            <ul className="list-group">
                {categories.map(cat => (
                    <li className='list-group-item'><Link to={'/department/' + cat.sys.id}>{cat.fields.name}</Link> </li>
                ))}
            </ul>
        </Router>
        )
}

export default DepartmentList