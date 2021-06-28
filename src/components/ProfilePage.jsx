import React from 'react'
import './styles/profilePage.css'
import MyBudgetBtn from './MyBudgetBtn'
import DeleteAccountBtn from './DeleteAccountBtn'

function ProfilePage(props) {

    return (
        <>
            <div className="profilePageDashboard">
                <h1>Hello {props.user.name}</h1>
            </div>
            <div className="profilePageOptions">
                <MyBudgetBtn />
                <DeleteAccountBtn />
            </div>
        </>
    )
}

export default ProfilePage