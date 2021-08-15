import React from 'react'
import { BiSearch, BiChevronDown } from 'react-icons/bi'
import Button from './Button'
import { BsBellFill } from 'react-icons/bs'

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <div className='left-search-section'>
        <h1 className='page-title'>Dashboard</h1>
        <div className='date-container'>
          <h1 className='day'>Monday, &nbsp;</h1>
          <h1 className='date'> 02 July 2020</h1>
        </div>
      </div>
      <div className='right-search-section'>
        <div className='user'>
          <div className='notification-icon'>
            <div className='notification-status'></div>
            <BsBellFill />
          </div>
          <h4>John Bayer</h4>
          <div className='user-image'>.</div>
          <div className='more-options-icon'>
            <BiChevronDown />
          </div>
        </div>
        <div className='search'>
          <Button color={'btn-blue'} size={'small-btn'}>
            + Add
          </Button>
          <label
            htmlFor='/search/application'
            id='search'
            className='search-logo'
          >
            <BiSearch />
          </label>
          <input
            type='text'
            name='application'
            id='search'
            placeholder='Search for Application here'
            className='search-input'
          />
        </div>
      </div>
    </div>
  )
}
