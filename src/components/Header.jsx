import React from 'react'

import "./header.scss"

import Logo from '../assets/img/Black.svg'

import { IoSearch } from "react-icons/io5";

import { BsCameraVideo } from "react-icons/bs";

import { CgMenuGridO } from "react-icons/cg";

import { FaRegBell } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";

import UserIcon from '../assets/img/userIcon.png'


const header = () => {
  return (
    <div className='container'>
        <div className='header__block'>


        <div className='header__left'>
        <GiHamburgerMenu  className='burger__icon'/>

        <a href="#">
        <img src={Logo} alt="img" />
        </a>
        </div>

        <div className='inputt__block'>
        <input className='inputt' type="text" placeholder='Search'  />
        <IoSearch  className='search__icon'/>
        </div>


        <div className='header__right'>
        <BsCameraVideo className='header__iconnn'/>
        <CgMenuGridO className='header__iconn'/>
        <FaRegBell className='header__icon'/>
        <img src={UserIcon} alt="user__icon" />
        </div>

        </div>






    </div>
  )
}

export default header