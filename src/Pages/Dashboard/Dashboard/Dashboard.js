import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../../MyOrders/MyOrders';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import AddService from '../../AddService/AddService';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageServices from '../../ManageServices/ManageServices';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReview from '../../AddReview/AddReview';
// import { CircularProgress } from '@mui/material';

const drawerWidth = 180;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin, logout, user } = useAuth();
    //spiner add to page
    // if (isLoading) { return <CircularProgress /> }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'darkgray', padding: '5px 5px' }}><Button color="inherit">Dashboard</Button></Link>
            <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Payment</Button></Link>
            <Link to={`${url}/myOrders`} style={{ textDecoration: 'none', color: 'orange', paddingRight: '5px' }}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Review</Button></Link>

            {admin && <Box>
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addService`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Add Product</Button></Link>
                <Link to={`${url}/manageServices`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Manage Product</Button></Link>
                <Link to={`${url}/manageAllOrders`} style={{ textDecoration: 'none', color: 'orange' }}><Button color="inherit">Manage All Orders</Button></Link>
            </Box>}

            <span className="mx-2 btn btn-dark"><Button onClick={logout} variant="light"> Logout </Button></span>
            <h4 className="my-3">User: {user.displayName}</h4>

            <NavLink className="my-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>HOME</NavLink>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`} >
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addService`} >
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageServices`} >
                        <ManageServices></ManageServices>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`} >
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>

                </Switch>


            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;







// import React from 'react';
// import DashboardBar from '../DashboardBar/DashboardBar';


// const Dashboard = () => {

//     return (
//         <div>
//             <h1 className="my-font">Dashboard</h1>
//             <DashboardBar></DashboardBar>

//         </div>
//     );
// };

// export default Dashboard;