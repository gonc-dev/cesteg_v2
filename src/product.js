import React from 'react'
import { useParams } from 'react-router'
import client from './client'
import {useState, useEffect} from 'react'
import DepartmentList from './department_list'

const Product = (props) => {
    const {id} = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        client.getEntry(id)
        .then(res =>{
            setItem(res.fields)
        })

    }, [])


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <DepartmentList />
                </div>
                <div className="col-md-9 col-sm-12">
                    {item == null 
                        ? <p>Loading</p>
                        : <div>
                            <div className="row">
                                <div className="col-md-7 col-sm-12">
                                    <h3>{item.name}</h3>
                                    <img className="product-img" src={item.image.fields.file.url} alt={item.image.title}/>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <hr />
                                    <h4>Available SKU's</h4>
                                    <ul>
                                        <li>Default</li>
                                    </ul>
                                    <p>Price available on quotation</p>
                                    <hr />
                                    <button className="btn btn-secondary">Add to Quote</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-12">
                                    <h4>Description</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Product