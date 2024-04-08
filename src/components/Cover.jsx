import React from 'react'
import videoBg from '../assets/video.mp4'

const Cover = () => {
  return (
    <div className='cover'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Cover