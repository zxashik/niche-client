import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure you want to delete this service')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    // const handleAddToCart = (index) => {
    //     console.log(services);
    //     // console.log(index);
    //     const data = services[index];
    //     data.email = "ab.com";
    //     console.log(data);

    //     fetch("http://localhost:5000/myOrders", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     });
    // }

    return (
        <div className="my-5">
            <h2 className="text-center my-5 green-color fs-1">Manage Product</h2>

            {/* {
                services.map(service => <div className="border py-4 w-50 mx-auto" key={service._id}>
                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-dark">Delete</button>
                </div>)
            } */}








            {
                services.map((service, index) =>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 pb-5">
                                <div className="p-3 border bg-light" key={service._id}>

                                    <h2>{service.name}</h2>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger me-4">Delete</button>
                                    {/* <button onClick={() => handleAddToCart(index)} className="btn btn-dark">Add To Cart</button> */}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageServices;