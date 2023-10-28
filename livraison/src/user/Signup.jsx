 import signUpImg from '../../src/imgs/Sign up-cuate.png'
import { useState } from 'react'
import axios  from 'axios'

import Swal from 'sweetalert2'; // Import the main SweetAlert2 module
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the CSS file
import 'sweetalert2/dist/sweetalert2.min.js'; // Import the JavaScript file





 const Signup = () => {
  
const clearInputs=()=>{
  document.getElementById('email').value=""
  document.getElementById('name').value=""
  document.getElementById('password').value=""


}


   const [user,setUser]=useState({
    name: '',
    email: '',
    password: '',
    role: ''
   })

   const handleChange=(e)=>{

      setUser({...user,[e.target.id]:e.target.value})

   }
   const submitSignUp=(e)=>{
        e.preventDefault();


        // fetch('http://localhost:4000/api/users/signup',{
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //      },
        //      body: JSON.stringify(user)
        // })
        // .then(res=>res.json())
        // .then(user=>console.log(user))
        // .catch(err=>console.error(err))

     
        axios.post('http://localhost:4000/api/users/signup', user, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            // Handle the successful response here.
            console.log(res.data);
            setUser("")
            clearInputs()
            Swal.fire({
              title: 'Your registration is done successfully',
              text: 'Go Check Your Email To Activate Your Account',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            
            
            
          

          })
          .catch(error => {
            // Handle any errors that occur during the request.
            console.error(error);
            Swal.fire({
              title: 'Failed registration',
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
              <form onSubmit={submitSignUp} className="space-y-6" >
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to Marhaba</h5>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div>
                      <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
                      <select onChange={handleChange} name="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        <option value="client">Client</option>
                        <option value="livreur">Delivery</option>
                      </select>
                  </div>
                
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                  

                  {/* {JSON.stringify(user)} */}
              </form>
          </div>

      </div>
      <div className="w-1/2">
        <img src={signUpImg} alt="image" />
      </div>
   </div>
    </>
  )
















}


export default Signup








