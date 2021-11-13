import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Service.css";

const Service = ({ service, index }) => {
  const { _id, name, price, description, img } = service;
  const { user } = useAuth();
  console.log({ user });

  //   const handleAddToCart = async () => {
  //     console.log(service);
  //     // console.log(index);
  //     const data = { name, price, description, img, userId: user.uid };

  //     await fetch(`http://localhost:5000/order/create`, {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //   };

  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <b>Price: {price}</b>
          </p>
          <div className="m-auto pb-3">
            <Link to={`/placeOrder/${_id}`}>
              <button className="btn btn-success text-white me-4">
                Book Now
              </button>
            </Link>

            {/* <button onClick={handleAddToCart} className="btn btn-dark">
              Add To Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
