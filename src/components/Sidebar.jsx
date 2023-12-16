import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import { ImFire } from "react-icons/im";

import { MdOutlineSubscriptions } from "react-icons/md";

import { GoFileDirectory } from "react-icons/go";

import { MdOutlineHistory } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";

import { IoMusicalNotesSharp } from "react-icons/io5";

import { FaUserCircle } from "react-icons/fa";

import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="container">

            <div className="sidebar__block">

            <div>
                <NavLink to="/">
                    <div className='home__block'>
                        <FaHome />
                        <p>Home</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/Trending">
                    <div className="trending__block">
                        <ImFire />
                        <p>Trending</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/Subscriptions">
                    <div className="subscriptions__block">
                      <MdOutlineSubscriptions />
                      <p>Subscriptions</p>
                    </div>
                </NavLink>
            </div>

            <span className="sidebar__span"></span>

            <div>
                <NavLink to="/Library">
                    <div className="library__block">
                    <GoFileDirectory />
                    <p>Library</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/History">
                    <div className="history__block">
                    <MdOutlineHistory />
                    <p>History</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/Like">
                    <div className="like__block">
                    <FaRegHeart />
                    <p>Liked Vedios</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/Music">
                    <div className="music__block">
                    <IoMusicalNotesSharp />
                    <p>Music</p>
                    </div>
                </NavLink>
            </div>

            <div>
                <NavLink to="/Login">
                    <div className="login__block">
                    <FaUserCircle />
                    <p>Login</p>
                    </div>
                </NavLink>
            </div>

            </div>





        


        </div>
  )
}

export default Sidebar