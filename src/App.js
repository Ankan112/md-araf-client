import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';


// import { createBrowserRouter } from "react-router-dom";
// import Blog from "./components/Blog/Blog";
// import Home from "./components/Home/Home/Home";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import Services from "./components/Services/Services";
// import Main from "./Layout/Main";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/blog',
//         element: <Blog></Blog>

//       },
//       {
//         path: '/services',
//         element: <Services></Services>,
//         loader: () => fetch('https://assignment-11-server-wheat.vercel.app/services')
//       },
//       {
//         path: '/login',
//         element: <Login></Login>
//       },
//       {
//         path: '/register',
//         element: <Register></Register>
//       },
//     ]
//   },
// ]);




function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
