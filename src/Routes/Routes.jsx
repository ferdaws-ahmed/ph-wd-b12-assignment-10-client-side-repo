import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";




const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children:[
            {
                path:'/',
                Component: Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component: Login
            }
        ]
    },

    {
        path:'/*',
        Component: ErrorPage
    }
])


export default router;