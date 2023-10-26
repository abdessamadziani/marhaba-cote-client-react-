import signUpImg from '../../src/imgs/Sign up-cuate.png'
import axios from 'axios'
// import { useHistory } from 'react-router-dom';

import { useState } from 'react'
 const Signin = () => {

//   const history = useHistory();

   const [user,setUser]=useState({
    email: '',
    password: ''
   })

   const handleChange=(e)=>{

      setUser({...user,[e.target.id]:e.target.value})

   }
   const submitSignIn=(e)=>{
        e.preventDefault();


        // fetch('http://localhost:4000/api/users/signin',{
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //      },
        //      body: JSON.stringify(user)
        // })
        // .then(res=>res.json())
        // .then(user=>{
        //         console.log(user)
        //             // history.push('/')
        //            }
        
        // )
        // .catch(err=>console.error(err))


        axios.post('http://localhost:4000/api/users/signin', user, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(res => {
              // Handle the successful response here.
              console.log(res.data);
            })
            .catch(error => {
              // Handle any errors that occur during the request.
              console.error(error);
            });


   }

  return (
    <>
    <div className="container flex  mx-auto mt-6">
      <div className=" flex w-1/2 justify-center h-52 ">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form onSubmit={submitSignIn} className="space-y-6" >
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign In to Marhaba</h5>
                 
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                      <input  onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                              <input onChange={handleChange} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                          </div>
                          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                      </div>
                      <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                  </div>

                  {JSON.stringify(user)}
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


export default Signin
