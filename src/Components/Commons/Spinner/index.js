import React, { Component } from 'react'
import './style.css'

export default function Spinner ({ shouldLoad }) {
  if (!shouldLoad) {
    return null
  }
  
  return (
    <div className='spinner'>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
