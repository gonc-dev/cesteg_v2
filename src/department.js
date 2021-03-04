import React from 'react'
import './styles/products.css'
import DepartmentList from './department_list'
import { useParams } from 'react-router-dom'
import client from './client'
import { useState, useEffect } from 'react'
import ProductCard from './product_card'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextFromMarkdown } from'@contentful/rich-text-from-markdown';

const Department = (props) => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [rich, setRich] = useState(null)
    useEffect(() => {
        client.getEntry(id)
            .then(res => {
                setItem(res.fields)
                richTextFromMarkdown(res.fields.description)
                    .then(html => {
                        setRich(html)
                    })
            })
    }, [id])
    

    return(
        <div className='container mt-5'>
            <div className="row">
                <div className="col-sm-12 col-md-3 ">
                    
                    <DepartmentList />
                </div>
                <div className="col-sm-12 col-md-9 ">
                {item == null 
                    ? <h3>Department Name</h3> 
                    : <React.Fragment>
                            <h3>{item.name}</h3>
                            <div className='deck'>
                                {item.products == undefined 
                                    ? null
                                    : item.products.slice(0,2).map(prod => {
                                        return (<ProductCard fields={prod.fields} id={prod.sys.id} />)
                                    })}
                            </div>
                            <hr />
                            {rich == null 
                                ? null
                                : documentToReactComponents(rich)}                            
                            <hr />
                      </React.Fragment>
                }
                </div>
            </div>
        </div>
    )
}

export default Department