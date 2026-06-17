import React from 'react'
import { contactAction } from './contact.action'


const ContactPage = () => {
  return (
   <form action={contactAction}>
    <div>
        <label htmlFor="fullName">FullName</label>
        <input type="text" id='fullName' name='fullName' />
    </div>
    <button type='submit'>Send</button>
   </form>
  )
}

export default ContactPage