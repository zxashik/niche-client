import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddReview.css";

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service container my-5">
            <h2 className="text-center my-5 my-font2 fs-1">Give your Review</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Your Name" />
                <input {...register("description")} placeholder="Description" />
                <select {...register("rate")}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className="btn btn-success mt-2" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;