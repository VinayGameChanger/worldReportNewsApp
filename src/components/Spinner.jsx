import React from 'react';
import spinnerImage from '../image/Spinner-1s-200px.gif'

export default function Spinner() {
    return (
      <div className='text-center'>
      <img src={spinnerImage} alt='spinner' />
      </div>
    )
  }

