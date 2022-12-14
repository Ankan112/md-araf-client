import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Context/UserContext';
import userImg from '../../img/user.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user && user.uid ?
                                <>
                                    <li><Link to='/addservice'>Add Service</Link></li>
                                    <li><Link to='/review'>My Review</Link></li>
                                </>
                                :
                                <></>
                        }
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl">Md Araf</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user && user.uid ?
                            <>
                                <li><Link to='/addservice'>Add Service</Link></li>
                                <li><Link to='/review'>My Review</Link></li>
                            </>
                            :
                            <></>
                    }

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && user.uid ?
                        <>
                            <div className="mr-3">
                                {
                                    user.photoURL ?
                                        <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                                        :
                                        <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={userImg} alt="" />
                                    // <p className="text-lg">User</p>

                                }
                            </div>
                            <Link ><button onClick={logOut} className="btn">LogOut</button></Link>
                        </>
                        :
                        <Link to='/login'><button className="btn">LogIn</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;