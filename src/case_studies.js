import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useState} from 'react'

const CaseStudies = (props) => {
    let contentList = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus urna, mattis vitae consequat sit amet, accumsan non nibh. Phasellus eleifend efficitur ex, sit amet vulputate nisl convallis a. Sed.',
        'Lorem ipsum dolor sit met, consectetur',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus urna, mattis vitae consequat sit amet, accumsan non nibh. Phasellus eleifend efficitur ex, sit amet vulputate nisl convallis a. Sed.',
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
                    <img src="images/case-study-1.jpg" />
                    <p className="legend">Legend 1</p>
                    <p>Some sort of case study</p>
                </div>
                <div>
                    <img src="images/case-study-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/case-study-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/case-study-4.jpg" />
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