import React from 'react'
import client from './client'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './styles/services.css'


const ServiceList = (props) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        client.getEntries({
            content_type: 'serviceCategory',
        }).then(res =>{
            setCategories(res.items)
        });

    }, [])

    return (
            <div className="container">
                <div className="row">
                    <div className="col-12 service-container">
                        {categories.map(cat => (
                            <Link to={'/service/' + cat.sys.id}>
                                <div className='row shadow-card zoom'>
                                    <div className="col-md-3 col-sm-12">
                                        <img src={cat.fields.icon.fields.file.url} />    
                                    </div>  
                                    <div className="col-md-9  col-sm-12">
                                        <h4>{cat.fields.name}</h4>
                                        <p>{cat.fields.tagline}</p>    
                                    </div>  
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default ServiceList