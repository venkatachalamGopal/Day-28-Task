import React from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const formValidationSchema=yup.object({
    image:yup.string().required(),
    productname:yup.string().required(),
    rating:yup.number().min(1).max(5).required(),
    price:yup.number().required(),
    description:yup.string().required()
})

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
        validationSchema:formValidationSchema,
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
       <Form onSubmit={formik.handleSubmit} autoComplete="off">
            <Form.Group className='mb-3'>
                <Form.Label>Product Image Link: </Form.Label>
                <Form.Control type="text" name="image" value={formik.values.image} 
                onChange={formik.handleChange}
                placeholder=''/>
                {formik.touched.image&&formik.errors.image?formik.errors.image:null}
            </Form.Group>
            
            <Form.Group className='mb-3'>
                <Form.Label>Product Name  : </Form.Label>
                <Form.Control type="text" placeholder='Prod Name'
                name="productname" value={formik.values.productname} onChange={formik.handleChange} />
            </Form.Group> 
            {formik.touched.productname&&formik.errors.productname?formik.errors.productname:null}
            <Form.Group className='mb-3'>
                <Form.Label>Product Rating: </Form.Label>
                <Form.Control type="text" placeholder='Give your rating 1 to 5'
                name="rating" value={formik.values.rating} onChange={formik.handleChange}
                />
            </Form.Group>
            {formik.touched.rating&&formik.errors.rating?formik.errors.rating:null}
            <Form.Group className='mb-3'>
                <Form.Label>Product Price: </Form.Label>
                <Form.Control type="text" placeholder='Prod price in Rs'
                name="price" value={formik.values.price} onChange={formik.handleChange}
                />
            </Form.Group>
            {formik.touched.price&&formik.errors.price?formik.errors.price:null}

            <Form.Group className='mb-3'>
                <Form.Label>Description :</Form.Label>
               <Form.Control type="text" placeholder='Prod Description'
                name="description" value={formik.values.description} onChange={formik.handleChange}
                />
            </Form.Group>
            {formik.touched.description&&formik.errors.description?formik.errors.description:null}

            <Button type="submit" className='btn btn-success'>SUBMIT</Button>
            
        </Form>
       </div>
        </>
    )
}