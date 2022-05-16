import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db,auth} from '../firebaseconfig'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
  const [title,setTitle]=useState("") 
  const [post,setPost]=useState("") 
     const navigate=useNavigate()
  const postCollection=collection(db,"posts")
  const createPost=async()=>{
        await addDoc(postCollection,{title:title,post:post,author:{
          name:auth.currentUser.displayName,id:auth.currentUser.uid
        }})
        navigate("/");
  }

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'><label>Title</label>
         <input placeholder='Title...' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='inputGp'>
        <label>Post</label>
         <textarea  placeholder='Post...' onChange={(e)=>setPost(e.target.value)}/>
        </div>
        <button onClick={createPost}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost