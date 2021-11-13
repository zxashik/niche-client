import React from 'react';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const { isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (

        <div>
            <h1 className="mt-5 my-font">Manage All Orders</h1>
        </div>
    );
};

export default ManageAllOrders;