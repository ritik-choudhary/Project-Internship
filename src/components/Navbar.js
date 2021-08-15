import React from 'react'
import { AiFillHome, AiFillFolder } from 'react-icons/ai'
import { RiBarChartFill } from 'react-icons/ri'
import { BiBriefcase, BiCalendarCheck } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdComment } from 'react-icons/md'
import { IoMdExit } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='top-options'>
        <div className='icon'>
          <AiFillHome />
        </div>
        <div className='icon'>
          <RiBarChartFill />
        </div>
        <div className='icon'>
          <BiBriefcase />
        </div>
        <div className='icon'>
          <AiFillFolder />
        </div>
        <div className='icon'>
          <BiCalendarCheck />
        </div>
        <div className='icon'>
          <BsFillPeopleFill />
        </div>
        <div className='icon'>
          <MdComment />
        </div>
        <div className='icon'>
          <IoMdExit />
        </div>
      </div>
      <div className='bottom-options'>
        <div className='icon'>
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  )
}
