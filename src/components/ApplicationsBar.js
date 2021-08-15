import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BsPeopleCircle } from 'react-icons/bs'
import { RiMessage2Fill } from 'react-icons/ri'
import { ImPhone } from 'react-icons/im'
import {BsArrowRightShort} from 'react-icons/bs'
import Image from '../project-logo.jpeg'
import './ApplicationBar.css'

export default function ApplicationsBar() {
  return (
    <div className='application-bar'>
        <div className="show-less">
            <BsArrowRightShort/>
        </div>
      <div className='message'>
        <p>
          Hello John Bayer, <br></br>You have 8 New Applications Today!
        </p>
      </div>
      <div className='image-container'>
        <img src={Image} alt="logo" />
      </div>
      <div className='applicants-container'>
        <div className='new-applicants'>
          <p>New Applicants</p>
          <div className='right-arrow-logo'>
            <BiChevronRight />
          </div>
        </div>
        <div className='people'>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
          <div className='person-container'>
            <div className='person-details'>
              <BsPeopleCircle className='person-icon' />
              <div className='person-info'>
                <h4>Rosie Metts</h4>
                <h6>
                  Applied to <span className='position'>IOS Developer</span>
                </h6>
              </div>
            </div>
            <div className='people-icons'>
              <div className='icon-container'>
                <RiMessage2Fill />
              </div>
              <div className='icon-container'>
                <ImPhone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
