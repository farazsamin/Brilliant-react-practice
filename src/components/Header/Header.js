import React from 'react';

const Header = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                
                <div className="col-md-6 mt-5">
                    <h1>Logic</h1>
                    <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
                    <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.

You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges! <a style={{color : 'gray'}} href="f">Read More</a></p>
                </div>
                <div className="col-md-1"></div>
                <div style={{backgroundColor : 'white'}} className="col-md-4 border mt-3">
                        <div className="row">
                        <img className="m-auto mb-3" style={{height : '60%', width : '60%'}} src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" alt="" />
                            <div className="col-md-6">
                                <h1>37</h1>
                                <p>Interactive Quizes</p>
                            </div>
                            <div className="col-md-6">
                                <h1>254+</h1>
                                <p>Concepts & Exercises</p>
                            </div>
                        </div>
                        <div className="text-center">
                        <button type="button" class="btn btn-dark btn-lg m-4">Start Course</button>
                        </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Header;