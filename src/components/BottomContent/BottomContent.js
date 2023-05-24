import React,{useState} from 'react';
import './bottomContent.css'
import PasswordList from '../PasswordList/PasswordList'
import { useEffect } from 'react'
import axios from 'axios';

function BottomContent({refe}){
  // const collectionArray=[{username:'manikanta',password:"Magic@123",website:'http://helloworld.com'},{username:'manikanta',password:"Magic@123",website:'http://helloworld.com'},{username:'manikanta',password:"Magic@123",website:'http://helloworld.com'}]
  const {refresh,setRefresh}=refe
  const [collectionArray,setCollectionArray]=useState([]);
  const [update,setUpdate]=useState(false)
   console.log(update)
  useEffect(()=>{
   async function getData(){
     await axios.post('http://localhost:1234/getdata').then(res=>{
        setCollectionArray(res.data)
      }).catch(err=>{
        console.log(err.response.data)
      })
    }
    getData()
  },[refresh,update])
  
  return (
    <div className="bottom_card_container">
      {console.log(update)}
      <div className="password_search_container">
        <div className="password_count_container">
          <h1 className="your_password_text">Your Passwords</h1>
          <p className="password_count">{collectionArray.length}</p>
        </div>
        <div className="search_icon_container">
          <img
            className="search_image"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          />
          <input
            className="search_icon_bottom"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="show_password_list_container">
        

        <ul className="unorder_list_container">
          {collectionArray.map((eachList,index) => (
              <PasswordList key={index}  singleBlock={{eachList,update,setUpdate}}/>
          ))}
        </ul>

        {collectionArray.length === 0 && (
          <div className="no_password_container">
            <img
              alt="no passwords"
              className="no_password_img"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <p className="no_pass_text">No Passwords</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BottomContent
