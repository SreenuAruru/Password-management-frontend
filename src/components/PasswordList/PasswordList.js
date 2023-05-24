import React,{useState} from 'react'
import './passwordList.css'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import axios from 'axios'

function PasswordList({singleBlock}){

  const {username,password,website}=singleBlock.eachList
  const {update,setUpdate}=singleBlock

  console.log(singleBlock)
  console.log(update,setUpdate)

  const [showPassword,setShowPassword]=useState(false)

  async function deleteFunction(data){
    await axios.post('http://localhost:1234/delete',{data}).then((res)=>{
      setUpdate(!update)
      window.alert('deleted')
    }).catch(err=>{
      console.log(err)
    })

  }
  return (
    <li className="list_container">
      <p className="first_letter">{username[0]}</p>
      <div className="name_password_container">
        <p className="web_path">{website}</p>
        <p className="name_text">{username}</p>
      <div className='password-container'>
          {showPassword ? (
            <p className="hidden_password_text">{password}</p>
          ) : (
            <img
              className="star_image"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
          <div className='icon' onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<FaEye/>:<FaEyeSlash/>}</div>
        </div>
      </div>
      <button  className="delete_button" type="button">
        <img
          onClick={()=>deleteFunction(website)}
          className="delete_icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordList
