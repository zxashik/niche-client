import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = ({ limit }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${limit}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="container my-5">
            <h2 className="text-center my-5 green-color fs-1">FEATURED PRODUCTS</h2>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 gx-5 gy-5">
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;