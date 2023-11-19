// import React, { useState } from "react";

// import "./Signup.css"; // Import the signup.css file
// import {auth} from "./Firebase"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const Navigate=useNavigate();

//   const handleSignup = async () => {
//     console.log(email, password);
//     if(email==""&& password==""){
//       alert(`Fill all the inpute fields`)
//     }
//     else{

//       try {
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const user = userCredential.user;
//         console.log("User signed up:", user);

//         Navigate(`/login`)

//       } catch (error) {
//         console.error("Signup error:", error);
//       }

//     }

//   };

//   return (
//     <div className="signup-container">
//       <h2>Register</h2>
//       <hr></hr>
//       <input
//         type="name"
//         placeholder="Name"
//         className="signup-input"
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="signup-input"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         id="Pass"
//         onChange={(e) =>
//         setPassword(e.target.value)

//         }
//         className="signup-input"
//       />

// <input
//         type="text"
//         placeholder="MobileNumber"

//         className="signup-input"
//       />
//       {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}

//       <button onClick={handleSignup} className="signup-button">Signup</button>
//       </div>
//   );
// };

// export default Signup;

// <---------------------- Signup with firebase -------------------------->

import React, { useState } from "react";
import "./Signup.css"; // Import the signup.css file
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
const [form,setForm]=useState({
  Email:"",
  Name:"",
  Password:""
})
  const Navigate = useNavigate();

  const handleChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target;
    setForm({
      ...form,
      [name]:value,
    });
  }
  console.log(form)

  const handleSignup = async () => {
    
      try {
        const resp=await axios.post('http://localhost:1012/Signup',{...form})
        Navigate(`/login`);
      } catch (error) {
        console.error("Signup error:", error);
      }
    
  };

  return (
    <div className="signup-container">
      <h2>Register</h2>
      <hr></hr>
      <input type="name" name="Name" value={form.Name} onChange={handleChange} placeholder="Name" className="signup-input" />
      <input
        type="email"
        placeholder="Email"
        name="Email"
        value={form.Email}
        onChange={handleChange}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Password"
        name="Password"
        value={form.Password}
        id="Pass"
        onChange={handleChange}
        className="signup-input"
      />

      <input type="text" placeholder="MobileNumber" className="signup-input" />
      {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}

      <button onClick={handleSignup} className="signup-button">
        Signup
      </button>
    </div>
  );
};

export default Signup;
