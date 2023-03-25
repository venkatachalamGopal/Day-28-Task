import React, { useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import { useState } from "react"


export function EditProduct(){
    const navigate=useNavigate()

    const{id}=useParams()
    const[image,setImage]=useState()
    const[productname,setProductname]=useState()
    const[rating,setRating]=useState()
    const[price,setPrice]=useState()
    const[description,setDescription]=useState()

// Get single Object using ID --
    function get(id){
        fetch(`https://641bec111f5d999a446ccd3d.mockapi.io/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setImage(data.image)
            setProductname(data.productname)
            setRating(data.rating)
            setPrice(data.price)
            setDescription(data.description)
            
        })
    }
    

    useEffect(()=>{
            get(id)
    },[id])

    // UpdatededData Function :

    async function updatedData(id){
        const editObj={
            image:image,
            productname:productname,
            rating:rating,
            price:price,
            description:description
        }
         await fetch(`https://641bec111f5d999a446ccd3d.mockapi.io/products/${id}`,{
        method:"PUT",
        body:JSON.stringify(editObj),
        headers:{
            "Content-Type":"application/json"
        }
        })
        navigate("/")
    }


    return(
    <>
    <div className="addContainer">
    <Form autoComplete="off">
            <Form.Group className='mb-3'>
                <Form.Label className="label">Product Image Link: </Form.Label>
                <Form.Control type="text" name="image" value={image}
                onChange={(e)=>setImage(e.target.value)}
                placeholder=''/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label className="label">Product Name  : </Form.Label>
                <Form.Control type="text" placeholder=''
                name="productname" value={productname} 
                onChange={(e)=>setProductname(e.target.value)} />
            </Form.Group> 
            <Form.Group className='mb-3'>
                <Form.Label className="label">Product Rating: </Form.Label>
                <Form.Control type="number" placeholder='Give your rating 1 to 5'
                name="rating" value={rating} onChange={(e)=>setRating(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label className="label">Product Price: </Form.Label>
                <Form.Control type="number" placeholder='price in Rs'
                name="price" value={price} onChange={(e)=>setPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label className="label">Description :</Form.Label>
                <Form.Control type="text" placeholder=''
                name="description" value={description} onChange={(e)=>setDescription(e.target.value)}
                />
            </Form.Group>
            <Button type="button" className='btn btn-success' onClick={()=>updatedData(id)}>Update</Button>{' '}
            <Button type="button" className='btn btn-warning' onClick={()=>navigate("/")}>Back</Button>

    </Form>
    </div>
    
    
    </>
    )
}