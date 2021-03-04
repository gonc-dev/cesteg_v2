import React from 'react'
import client from './client'
import './styles/news.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Service = (props) => {
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
                       <h1 className='article-title'>{content.name}</h1>
                       <img className='article-img' src={content.picture.fields.file.url} alt={content.picture.fields.name} />
                       <hr />
                        
                       <div className='article-text'>
                        { documentToReactComponents(content.description)}
                       </div>
                   </div>
                   <div className="col-md-1"></div>

               </div>
           </div>
        }
    </React.Fragment>
        )
}

export default Service