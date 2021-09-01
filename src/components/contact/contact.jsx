import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='background'>
        <div className='container'>
          <div className='heading'>CONTACT</div>
          <ul>
            <li>
              <input type='text' placeholder='Name' />
            </li>
            <li>
              <input type='text' placeholder='Email' />
            </li>
            <li>
              <textarea
                type='text'
                placeholder='Message'
                className='input-text'
              />
            </li>

            <button type='button' className='btn'>
              Send
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
