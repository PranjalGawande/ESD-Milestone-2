import React from 'react'
import Nav from '../components/Nav'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import ProfileDetails from '../components/ProfileDetails'

function Profile() {
  return (
    <div>
        <Nav/>
        <MenuBar/>
        <ProfileDetails/>
        <Footer/>
    </div>
  )
}

export default Profile