import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import axios from 'axios';
import { useForm } from "react-hook-form";
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import "./PlaceOrder.css"
import Footer from '../../Shared/Footer/Footer';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();

    //react hook from
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log({ user });
    const onSubmit = data => {
        const order = { ...data, ...service, userId: user.uid }
        order._id = undefined;
        console.log({ order });

        axios.post('http://localhost:5000/order/create', order)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order added successfully');
                    reset();
                }
            })
    }




    return (
        <div>
            <Navigation></Navigation>



            <div className="container px-4 my-5">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 shadow">
                            <h1 className="text-start">{service.name}</h1>
                            <div className="h-50 w-50">
                                <img className="img-thumbnail" src={service.img} alt="" />
                            </div>

                            <p className="w-50 my-2 text-start">{service.description}</p>
                            <h3 className="text-start">Price: {service.price}</h3>


                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light add-service">
                            {/* <img src={user?.photoURL} alt="" /> */}
                            <h3>Email: {user?.email}</h3>
                            <h3>User Name: {user?.displayName}</h3>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} />
                                <input {...register("email")} placeholder="Email" value={user?.email} />
                                <input {...register("address")} placeholder="Address" />
                                <input type="number" {...register("phone")} placeholder="Phone number" />
                                <input className="btn btn-success" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <NavLink className="mx-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>BACK TO HOMEPAGE</NavLink>

            </div>
            <Footer></Footer>


        </div >
    );
};

export default PlaceOrder;