import React from 'react';
import './styles/products.css'
import ProductCard from './product_card'
import {useState, useEffect} from 'react'
import DepartmentList from './department_list'
import client from './client'




const Products = (props) => {
    const [featured, setFeatured] = useState([])

    useEffect(()=>{    
        client.getEntries({
            content_type: 'product',
            'fields.featured': true
        }).then(res =>{
            setFeatured(res.items)
            console.log(res.items)
        });
    }, [])


    return(
    <div className="container mt-5">
        <div className="row">
        <div className="col-md-3 col-sm-12">
            <DepartmentList />
        </div>
        <div className="col-md-9 col-sm-12">
            <h3 className="text-center">Featured</h3>
            {featured.map(product => (
                <ProductCard fields={product.fields} id={product.sys.id} />
            ))}
            <button className="btn btn-primary m-2">Previuos</button>
            <button className="btn btn-primary m-2">Next</button>
        </div>
        </div>
    </div>)
}

export default Products;