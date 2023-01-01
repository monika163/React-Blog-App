import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        lastname : "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name,lastname, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } 
        else if (lastname === "") {
            toast.error('last name field is requred',{
               position: "top-center",
           });
        }else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name='name' onChange={getdata} />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name='lastname' onChange={getdata} />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata}/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>DOB</Form.Label>
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={getdata} />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Log In</NavLink></span> </p>
                    </div>
                    <SIgn_img />



                    
                </section>
                <ToastContainer />
            </div>


        



           
        </>
    )
}

export default Home