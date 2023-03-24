import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import React,{useEffect,useState} from "react";
import { useNavigate}  from "react-router-dom"


export function Home(){
    const [data,setData]=useState([]);console.log(data);
    const navigate=useNavigate()


    async function getData(){
        const Resp=await fetch(`https://641bec111f5d999a446ccd3d.mockapi.io/products`)
        console.log(Resp);
        const data=await Resp.json();
        setData(data)
    }
    useEffect(()=>{
        getData()
    },[])

    async function deleteData(id){
      await fetch(`https://641bec111f5d999a446ccd3d.mockapi.io/products/${id}`,{
        method:"DELETE"
      })
      await getData();
      
    }

    return(
        <>
        <h3>Product Lists : </h3>
        <Button onClick={()=>navigate("/add-product")}>Add New Products</Button>
        <div className='containers'>
        {data.map((obj,index)=><Product obj={obj} key={obj.id} 
        deleteBtn={<button onClick={()=>deleteData(obj.id)} className='btn btn-danger btn-sm' >Delete</button>}/>)}
        </div>
    
        </>
    );
}



function Product({obj,deleteBtn}){
  
  

    return (
      <div className='content'>
        <Card>
          <Card.Img style={{width:250}} src={obj.image} className="divImage"/>
          <Card.Title className="title">
            <span>{obj.productname}</span>
            <span>{obj.rating}<small>star</small></span>
            <span>Rs.{obj.price}</span>
          </Card.Title>
          <Card.Body>{obj.description}</Card.Body>
          
          <Card.Footer className='Foot'>
            {deleteBtn}
            <button className='btn btn-warning btn-sm'>Update</button>
          </Card.Footer>
        </Card>
      </div>
    );
  }

