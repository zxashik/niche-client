import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
// import './Services.css';

const Reviews = ({ limit }) => {
    // const data = { name, price, description, rate}
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?limit=${limit}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="" className="container my-5">
            <h2 className="text-center my-5 my-font2 fs-1">Reviews</h2>
            <div className="container my-5">
                <div className="row row-cols-8 row-cols-md-8 gx-3 gy-4 ">
                    {
                        reviews.map(review =>
                            <div className="container mx-auto">
                                <div className="row">
                                    {/* <div className="col-12 pb-5"> */}

                                    <div className="p-3 border bg-light shadow">

                                        <h5 className="card-title">Name: {review.name}</h5>
                                        <p className="card-text"><h4>Review</h4> {review.description}</p>
                                        <p className="card-text"><b>Your Rating out of 5: <h3 className="text-warning">{review.rate}</h3></b></p>

                                        {/* </div> */}

                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Reviews;





