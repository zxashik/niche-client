import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashboardBar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <ul class="nav justify-content-center bg-secondary py-3 container">

                <li class="nav-item">
                    <Link style={{ textDecoration: 'none' }} to="/home"><span className="text-white nav-link">Home</span></Link>
                </li>
                <li class="nav-item">
                    <Link style={{ textDecoration: 'none' }} to="/dashboard"><span className="text-white nav-link">Dashboard</span></Link>
                </li>
                <li class="nav-item">
                    <Link style={{ textDecoration: 'none' }} to="/myOrders"><span className="text-white nav-link">My Order</span></Link>
                </li>
                <li class="nav-item">
                    <Link style={{ textDecoration: 'none' }} to="/pay"><span className="text-white nav-link">Pay</span></Link>
                </li>
                <li class="nav-item">
                    <Link style={{ textDecoration: 'none' }} to="/Addreview"><span className="text-white nav-link">Review</span></Link>
                </li>
                <li class="nav-item">
                    <span className="mx-2"><Button onClick={logout} variant="light"> Logout </Button></span>
                </li>
                <li class="nav-item">
                    <span className="mx-2 text-white">
                        <b>user: {user.displayName}</b>
                    </span>
                </li>

            </ul>
        </div>
    );
};

export default DashboardBar;