import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service container my-5">
            <h2 className="text-center my-5 my-font2 fs-1">Add Your Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Your Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddService;