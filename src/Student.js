import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Student() {
    const[data,setdata]=useState([])
    const fetchstudentlist = async()=>{
        const res= await axios.get("https://64d9c2fee947d30a260a44d5.mockapi.io/user")
        if(res.status===200){
            setdata(res.data);
            
        }
       
    }
    console.log(data);

    useEffect(()=>{
        fetchstudentlist()
    },[])
  return (
    <div className='container mt-4'>
        <h2>Student list</h2>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">place</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>      
      <th scope="col">Action</th>      

    </tr>
  </thead>
  <tbody>
    {
        data.map((list)=>{
            return <tr>
            <th scope="row">1</th>
            <td>{list.Name}</td>
            <td>{list.age}</td>
            <td>{list.place}</td>
            <td>{list.address}</td>
            <td>{list.phone}</td>
            
          </tr>
        })
    }
    
    
  </tbody>
</table>
    </div>
  )
}

export default Student