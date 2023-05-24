import React,{useState} from 'react';
import './topContent.css'
import axios from 'axios'

function TopContent({refe}) {
  const [formDeatils,setFormDeatils]=useState({website:'',username:'',password:''})
  const {refresh,setRefresh}=refe
  function handleChange(event){
    const {name,value}=event.target
    setFormDeatils({...formDeatils,[name]:value})
  } 

  
    async function submitFunction(event){
      await axios.post('http://localhost:1234/test',{formDeatils}).then(res=>{
        setRefresh(refresh+1)
      }).catch(err=>{
        console.log(err.response.status)
      })
    }
 
  

  return (
    <div className="top_content_container">
      {console.log(formDeatils)}
      <form className="password_input_card" onSubmit={(e)=>{submitFunction(e)}}>
        <h1 className="password_input_title">Add New Password</h1>
        <div className="search_box_container">
          <img
            className="search_icon"
            alt="website"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          />
          <input 
            name="website"
            value={formDeatils.website}
            onChange={(e)=>handleChange(e)}
            type="text"
            placeholder="Enter Website"
            className="search_box"
            required
          />
        </div>

        <div className="search_box_container">
          <img
            className="search_icon"
            alt="username"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          />
          <input 
            name="username"
            value={formDeatils.username}
            onChange={(e)=>handleChange(e)}
            type="text"
            placeholder="Enter Username"
            className="search_box"
            required
          />
        </div>

        <div className="search_box_container">
          <img
            className="search_icon"
            alt="password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          />
          <input 
            name="password"
            value={formDeatils.password}
            onChange={(e)=>handleChange(e)}
            type="password"
            placeholder="Enter Password"
            className="search_box"
            required
          />
        </div>

        <button type="submit" className="add_button" >
          Add
        </button>
      </form>

      <img
        className="password_side_image"
        alt="password manager"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
      />
    </div>
  )
}

export default TopContent;
