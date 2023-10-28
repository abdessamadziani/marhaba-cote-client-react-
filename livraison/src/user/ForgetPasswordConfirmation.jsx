import React, { useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import { useEffect } from 'react'
import signinnImg from '../../src/imgs/signin.png'
import flesh from '../../src/imgs/flesh.png'


import axios from 'axios'
import Swal from 'sweetalert2'; // Import the main SweetAlert2 module
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the CSS file
import 'sweetalert2/dist/sweetalert2.min.js'; // Import the JavaScript file




export const ForgetPasswordConfirmation = () => {


    const [newpassword,setNewPassword]=useState()

    const handleChange=(e)=>{
   
       setNewPassword({newpassword,[e.target.id]:e.target.value})
   
    }



    const [validUrl,setValidUrl]=useState(false)
    const {token}=useParams()

    // useEffect(() => {
    //     const verifyEmailUrl = async () => {
    //         try {
    //             const url = `http://localhost:4000/api/users/forgetpassword/${token}`;
    //             const { data } = await axios.get(url);
    //             console.log(data);
    //             setValidUrl(true);
    //         } catch (error) {
    //             console.log(error);
    //             setValidUrl(false);
    //         }
    //     };
    //     verifyEmailUrl();
    // }, []); 


    const submitForgetPassword=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/api/users/forgetpassword/${token}`,newpassword, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(res => {
              // Handle the successful response here.
              console.log(res.data);
              setValidUrl(true)
              Swal.fire({
                title: 'Your Password Reseted Now Try To Sign in With Your New password',
                showclassName: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideclassName: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            })
            .catch(error => {
              // Handle any errors that occur during the request.
              console.error(error);
            });

    }
      
   

  return (

    <div className='mx-auto mt-6 w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
    {(!validUrl) &&

      
              <form onSubmit={submitForgetPassword}   className="space-y-6" >
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Type your new passowrd</h5>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your new password</label>
                      <input   onChange={handleChange} type="password" name="newpassword" id="newpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                 <div className='md:w-1/2'>
                   <button type="submit" className="w-1/3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                 </div>
                 

              </form>
   }
       { (validUrl) &&
        (
            
            <Link to="/signin" classNameName="flex items-center">                   
                  <div className=" mx-auto mt-6 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="p-8 rounded-t-lg" src={signinnImg} alt="product image" />
                      </a>
                      <div className="px-5 pb-5">
                          <div className="flex items-center mt-2 mb-2">
                             <img className="p-4 rounded-t-lg" src={flesh} alt="product image" />
                          </div>
                          <div className="flex items-center justify-center">
                              <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go to SignIn</button>
                          </div>
                      
                      </div>
                  </div>
            </Link>
        )
        }

        
    </div>
  )
}
