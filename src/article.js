import React from 'react'
import client from './client'
import './styles/news.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Article = (props) => {
    const { id } = useParams()
    const [content, setContent] = useState(null)
    useEffect(() => {
        client.getEntry(id).then(res =>{
            console.log(res)
            setContent(res.fields)
        });
    }, [id])

    return (<React.Fragment>
        {content == null 
                ? <p>loading...</p>
                : 
           <div className='container'>    
               <div className='row'>
                   <div className="col-md-1"></div>
                   <div className='col-md-10 col-sm-12'>
                       <h1 className='article-title'>{content.title}</h1>
                       <img className='article-img' src={content.image.fields.file.url} alt={content.image.fields.name} />
                       <hr />
                        <div className="row">
                            <div className="col-md-2 col-sm-12"> <i className="fa fa-user-circle fa-5x"></i> </div>
                            <div className="col-md-10 col-sm-12">
                                <h4>{content.author}</h4>
                                <p>{content.created}</p>
                            </div>
                        </div>
                        <hr />
                       <div className='article-text'>
                        { documentToReactComponents(content.content)}
                       </div>
                   </div>
                   <div className="col-md-1"></div>

               </div>
           </div>
        }
    </React.Fragment>
        )
}

export default Article