import React from 'react'
import client from './client'
import './styles/news.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Featured = (props) => {
    return(
        <div className='featured'>
            <img alt={props.article.image.fields.name} src={props.article.image.fields.file.url} />
            <div className='featured-card'>
                <h4>{props.article.title}</h4>
                <p> <i className="fas fa-user    "></i> {props.article.author}</p>
                <p> <i className="fas fa-clock-o    "></i> {props.article.created}</p>
            </div>
        </div>
    )
}

const ArticleCard = (props) => {
    console.log(props.article)
    return (
    <div className='card'>
        <img src={props.article.image.fields.file.url} />
        <div className='card-body'>
            <h4><Link to={"/article/" + props.articleID}>{props.article.title}</Link></h4>
            <p> <i className="fas fa-user    "></i> {props.article.author}</p>
            <p> <i className="fas fa-clock-o    "></i> {props.article.created}</p>
        </div>
    </div>)
}

const News = (props) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        client.getEntries({
            content_type: 'post',
            limit: 3
        }).then(res =>{
            console.log(res.items)
            setArticles(res.items)
        });

    }, [])

    return (
           <div className='container'>
               <div className='row'>
                   <div className='col-12'>
                       {articles.length > 0 ? <Featured article={articles[0].fields}/> : <p>No Articles at the moment</p>}
                   </div>
               </div>
               <div className='row'>
                   <div className='col-md-8 col-sm-12 deck'>
                       {articles.map(article => (<ArticleCard 
                            article={article.fields}
                            articleID={article.sys.id}/>))}
                   </div>
                   <div className='col-md-4 col-sm-12'>
                       <h3>Cesteg News.</h3>
                       <p>Keep up to date with the latest at Cesteg. </p>
                   </div>
               </div>
           </div>
        )
}

export default News