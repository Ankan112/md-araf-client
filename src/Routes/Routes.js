import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import Service from "../components/Service/Service";
import Services from "../components/Services/Services";
import UpdateReview from "../components/UpdateReview/UpdateReview";
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
                loader: () => fetch('https://assignment-11-server-wheat.vercel.app/allservices')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://assignment-11-server-wheat.vercel.app/services/${params.id}`)
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-wheat.vercel.app/reviews/${params.id}`)
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
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);
export default router;