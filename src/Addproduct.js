import React from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'

export function AddProduct(){
    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{
            image:"",
            productname:" ",
            rating:" ",
            price:" ",
            description:" "
        },
        onSubmit:async (obj,action)=>{
            // console.log(obj);
            await fetch(`https://641bec111f5d999a446ccd3d.mockapi.io/products`,{
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            navigate("/");
            action.resetForm();

            
        }
    })
   console.log(formik);

    return(
        <>
       <h3>Add Your Products</h3>
       <div className='addContainer'>
       <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Product Image Link: </Form.Label>
                <Form.Control type="text" name="image" value={formik.values.image} 
                onChange={formik.handleChange}
                placeholder=''/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Product Name  : </Form.Label>
                <Form.Control type="text" placeholder='Prod Name'
                name="productname" value={formik.values.productname} onChange={formik.handleChange} />
            </Form.Group> 
            <Form.Group className='mb-3'>
                <Form.Label>Product Rating: </Form.Label>
                <Form.Control type="text" placeholder='Give your rating 1 to 5'
                name="rating" value={formik.values.rating} onChange={formik.handleChange}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Product Price: </Form.Label>
                <Form.Control type="text" placeholder='Prod price in Rs'
                name="price" value={formik.values.price} onChange={formik.handleChange}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Description :</Form.Label>
               <Form.Control type="text" placeholder='Prod Description'
                name="description" value={formik.values.description} onChange={formik.handleChange}
                />
            </Form.Group>
            <Button type="submit" className='btn btn-success'>SUBMIT</Button>
            
        </Form>
       </div>
        </>
    )
}