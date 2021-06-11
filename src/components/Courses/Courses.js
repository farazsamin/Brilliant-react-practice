import React from 'react';
import './Courses.css'
const Card = (props) => {
    const {courseTitle, courseImage, courseDescription} = props;
    return (
        <div className="row">
            <div className="col-md-4">
                <div class="card mt-2" style={{ border: '0px', backgroundColor: "#F8F8F8" }}>
                    <img class="card-img-top m-auto d-block" src={courseImage} alt="Card cap" style={{ width: '18rem' }} />
                    <div class="mt-3">
                        <h5 >{courseTitle}</h5>
                        <p>{courseDescription}</p>
                        <hr style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card mt-2" style={{ border: '0px', backgroundColor: "#F8F8F8" }}>
                    <img class="card-img-top m-auto d-block" src={courseImage} alt="Card cap" style={{ width: '18rem' }} />
                    <div class="mt-3 ">
                        <h5 >{courseTitle}</h5>
                        <p>{courseDescription}</p>
                        <hr style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card mt-2" style={{ border: '0px', backgroundColor: "#F8F8F8" }}>
                    <img class="card-img-top m-auto d-block" src={courseImage} alt="Card cap" style={{ width: '18rem' }} />
                    <div class="mt-3">
                        <h5 >{courseTitle}</h5>
                        <p>{courseDescription}</p>
                        <hr style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
           

        </div>


    );
};

export default Card;