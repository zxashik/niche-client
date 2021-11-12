import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/QNn3Wvx/bg.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block ">
                            <h1 className="my-font2">A BROAD RANGE OF TRENDY EYEWEAR</h1>
                            <p className="my-font2 text-dark"><i>Perfect look with a suitable pair of glasses. </i></p>
                            <p className="my-font2"><i>Put on eyewear and put on positive view mode.</i></p>
                            <button type="button" className="btn btn-danger btn-lg">
                                <Link className="td" to="/explore"><span className="text-white">Explore SunGlasses</span></Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;