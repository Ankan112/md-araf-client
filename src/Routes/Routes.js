import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import Service from "../components/Service/Service";
import Services from "../components/Services/Services";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/review',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    },
]);
export default router;