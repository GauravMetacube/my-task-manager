import React from 'react'

function About() {
  return (
    <div className='container-fluid about'  style={{backgroundColor:' #20c997' }}>
      <div className='container p-4' style={{maxWidth:'60ch'}}>
        <h1 className='text-center'>About</h1>
        <p className='justify'>
            This is a task manager app. If you have difficulty in managing your task , this app is for you.
            You can add task and update it and also set the status to in progress or completed.
            You can track creation date and completion date.
            This app is everything you need.
        </p>
      </div>
    </div>
  )
}

export default About
