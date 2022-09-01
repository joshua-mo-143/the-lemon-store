import React, { useContext } from 'react'
import { userContext } from '../components/Contexts'
import { Navbar } from '../components/Navbar/Navbar';
import { Announcement } from '../components/Navbar/Announcement';

export const LoginPage = () => {

    const {user, setUser} = useContext(userContext);

  return (
    <>
    <div className="login-wrapper">
        <div className="login-container">
            <h1>Sign in</h1>
            <form>
                
                <label><input type="text" className="login-user" placeholder="Username/email here"/></label>
                <label><input type="password" className="login-pw" placeholder="Password here"/></label>
                </form>
                <button className="btnsubmit" onClick={setUser('bob')}>Submit</button>
                <button className="btnsubmit" onClick={console.log(user)}>Submit</button>

        </div>
    </div>
    </>
  )
}
