import React from 'react';
import './styles/products.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="card">
            <img src={props.fields.image.fields.file.url} alt={props.fields.name} className="card-img"  />
            <div className="card-body">
                <h4 className="card-heading">{props.fields.name}</h4>
                <p className="card-text"> {props.fields.description}</p>
                <Link className="btn btn-primary" to={"/product/" + props.id}>Learn More</Link>
            </div>
        </div>
    )
}

export default ProductCard