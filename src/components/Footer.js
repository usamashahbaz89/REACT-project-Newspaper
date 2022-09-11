import React, { Component } from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'



export class Footer extends Component {
  render() {
    return (
      < div className={`bg-${this.props.navbar} footer text-center py-5`} >
       <p className='footer-text'> &copy; 2022 Newspaper. All rights reserved</p>
       
       <FaFacebook className='mx-2 facebook' size='1.5rem' color={`${this.props.icons}`} cursor={'pointer'}/>
       <FaInstagram className='mx-2 instagram' size='1.5rem' color={`${this.props.icons}`} cursor={'pointer'}/>
       <FaTwitter className='mx-2 twitter' size='1.5rem' color={`${this.props.icons}`}  cursor={'pointer'}/>
       <FaYoutube className='mx-2 youtube' size='1.5rem' color={`${this.props.icons}`}  cursor={'pointer'}/>
      
      </div>
    )
  }
}

export default Footer
