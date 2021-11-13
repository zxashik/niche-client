import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user.uid}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log({ orders });


    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure you want to delete this service')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div>

            <h2 className="text-center my-5 green-color fs-1">All my orders: {orders.length}</h2>
            {
                orders.map((order, index) =>
                    <div className="container mx-auto">
                        <div className="row">
                            <div className="col-4 pb-5">

                                <div className="p-3 border bg-light" key={order._id}>

                                    <h2>{order.name}</h2>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger me-4">Delete</button>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;