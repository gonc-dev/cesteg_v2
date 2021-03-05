import React from 'react'
import client from './client'
import './styles/news.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const ArticleCard = (props) => {
    return (
    <div className='card' data-aos="fade-up" data-aos-duration="2000">
        <img src={props.article.image.fields.file.url} />
        <div className='card-body'>
            <h4><Link to={"/article/" + props.articleID}>{props.article.title}</Link></h4>
            <p> <i className="fas fa-user    "></i> {props.article.author}</p>
            <p> <i className="fas fa-clock-o    "></i> {props.article.created}</p>
        </div>
    </div>)
}


const LatestPosts = (props) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        client.getEntries({
            content_type: 'post',
            limit: 3
        }).then(res =>{
            setArticles(res.items)
        });
        AOS.init()

    }, [])

    return (
            <div className='deck'>
                {articles.map(article => (<ArticleCard 
                    article={article.fields}
                    articleID={article.sys.id}/>))}
            </div>
        )
}

export default LatestPosts