import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useState} from 'react'

const CaseStudies = (props) => {
    const contentList = [
        'This is somee case study',
        'this is another',
        'and yet another'
    ]
    const [content, setContent] = useState(contentList[0])
    

    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-8">
                <h2>Case Studies</h2>
                <Carousel onChange={(index) => {
                    console.log(index)
                    setContent(contentList[index])
                }}>
                <div>
                    <img src="logo192.png" />
                    <p className="legend">Legend 1</p>
                    <p>Some sort of case study</p>
                </div>
                <div>
                    <img src="logo192.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="logo512.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

export default CaseStudies