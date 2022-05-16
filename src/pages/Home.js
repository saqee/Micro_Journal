import React, { useEffect, useState } from 'react'
import {collection, getDocs,deleteDoc,doc} from 'firebase/firestore'
import { db } from '../firebaseconfig'
const Home = () => {
  const [postLists,setList]=useState([])
 const collectionList=collection(db,"posts")

 const deletePost=async(id)=>{
    const userDoc=doc(db,"posts",id)
    await deleteDoc(userDoc)
 }
  useEffect(()=>{
      const getPosts=async ()=>{
        const data=await getDocs(collectionList)
         console.log(data.docs);
        setList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      }
      getPosts()
  },[])
  return (
    <div className='homePage'>
      {postLists.map((posting)=>{
        return (
        <div className='post'>
          <div className='postHeader'><h1>{posting.title}</h1>
           <div className='deletePost'><button onClick={()=>deletePost(posting.id)}>&#128465;</button></div>
          </div>
          <div className='postTextContainer'><p>{posting.post}</p></div>
          <h3>@{posting.author.name}</h3>
        </div>)
      })}
    </div>
  )
}

export default Home