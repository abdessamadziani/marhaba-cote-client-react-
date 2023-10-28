import React from 'react'
import axios from 'axios'
import imgForgetPassword from '../../src/imgs/Forgot password-rafiki.png'
import { useState } from 'react'
import Swal from 'sweetalert2'; // Import the main SweetAlert2 module
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the CSS file
import 'sweetalert2/dist/sweetalert2.min.js'; // Import the JavaScript file
export const ForgetPassword = () => {


    
//        const [email]=useState({
//         email: ''
//  })
    
//        const handleChange=(e)=>{
    
//           setUser({email,[e.target.id]:e.target.value})
    
//        }

const [email,setEmail]=useState()

 const handleChange=(e)=>{

    setEmail({email,[e.target.id]:e.target.value})

 }
       const submitForgetPassword=(e)=>{
            e.preventDefault();
    
            axios.post('http://localhost:4000/api/users/checkuser',email, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
              })
                .then(res => {
                  console.log(res.data);
                  Swal.fire({
                    title: 'Email Send successfully',
                    text: 'Go Check Your Email To Reset Your Account',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                })
                .catch(error => {
                  console.error(error);
                  Swal.fire({
                    title: 'Failed Send Email ',
                    text: 'Try Again ',
                    icon: 'error',
                    confirmButtonText: 'Okey'
                  })
                });
       }


  return (
    <>
             <div className="container flex  mx-auto mt-6">
      <div className=" flex w-1/2 justify-center h-52 ">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form onSubmit={submitForgetPassword} className="space-y-6" >
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forget Password</h5>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
            
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                 
              </form>
          </div>

      </div>
      <div className="w-1/2">
        <img src={imgForgetPassword} alt="image" />
      </div>
   </div>

    </>
  )
}
