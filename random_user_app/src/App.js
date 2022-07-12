
import { Fragment, useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from './components/Button';


function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const refreshUser = () => {
    setLoading(true);
     axios.get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response.data.results)
        setUserData(response.data.results)
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
        setActiveUser(true);
      })
   
  }

  return (
    <div className="App">
      <h1> Random User Generator</h1>
      <Button isActive ={activeUser} clicked = {refreshUser} />
      {loading ?(
        <h1> Loading... </h1> 
      ): (
        <div className = "app_user"> 
              {userData.map((user,index) => {
                return (
                  <Fragment>
                    
                    {/* <img src= {user.picture.large} alt="#"> </img>  */}
                    <h3> NAME: {user.name.first} {user.name.last}</h3> 
                    <h3> AGE: {user.dob.age}</h3>
                    <h3> EMAIL:  {user.email} </h3>
                  </Fragment>
                )
              })}
         </div> 
      ) } 
      
    </div>
  );
}

export default App;
