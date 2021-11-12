import React from 'react';

const Sports = () => {
    return (
        <div className="">
            <div className="container p-5 my-5 text-center">
                <h1 className="my-font2">OUR</h1>
                <h1 className="my-font2">SPORTS SunGlasses</h1>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://lunettes.com.bd/wp-content/uploads/2021/01/SPORTSTAR_SIDE.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">SPORTSTAR (PHOTOCHROMIC)</h5>
                                <h6>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://lunettes.com.bd/wp-content/uploads/2021/09/ELITE-ORANGE-SPORTS-SUNGLASS-1.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ELITE RED SPORTS SUNGLASS</h5>
                                <h6>$120</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://lunettes.com.bd/wp-content/uploads/2021/09/ALFIE-TRANSPARENT-BLACK-1-600x600.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ELFIE TRANSPARENT BLACK</h5>
                                <h6>$150</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://lunettes.com.bd/wp-content/uploads/2021/09/ELITE-GREEN-SPORTS-SUNGLASS-1-600x600.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ELITE GREEN SPORTS SUNGLASS</h5>
                                <h6>$89</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;