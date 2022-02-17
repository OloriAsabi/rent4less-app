import React,{useState} from 'react';
import { RegisterUser } from '../apiCalls';
import images from "../data/rent4less-logo-small 1.png";
import "./Nav.css"

const Register = () => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [countryId, setCountryId] = useState();    


    const login = (e) => {
		e.preventDefault();
		RegisterUser(firstName, lastName, email, username, password, phoneNumber, countryId);
	};

  return (
    <div>
    {localStorage.removeItem("token")}
   {localStorage.removeItem("user")}
     <div className="content">
         <form onSubmit={login}>
             <div className="logo">
                 <img src={images} alt="" />
             </div>
             <h2>Register to Rent4less</h2>
             <div className="inputs">
                 <label htmlFor="email">FirstName</label>
                 <br />
                 <input
                     type="text"
                     id="text"
                     value={firstName}
                     onChange={(e) => {
                         setFirstName(e.target.value);
                     }}
                     name="firstname"
                     placeholder="Enter your First Name"
                 />
             </div>
             <div className="inputs">
                 <label htmlFor="password">LastName</label>
                 <br />
                 <input
                     type="text"
                     id="text"
                     name="lastName"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     placeholder="Enter your last name"
                 />
             </div>
             <div className="inputs">
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							name="email"
							placeholder="Your email"
						/>
					</div>
                    <div className="inputs">
                 <label htmlFor="password">Password</label>
                 <br />
                 <input
                     type="password"
                     id="password"
                     name="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                 />
             </div>
              <div className="inputs">
                 <label htmlFor="username">Username: </label>
                 <br />
                 <input
                     type="text"
                     id="text"
                     name="text"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     placeholder="Username"
                 />
             </div> <div className="inputs">
                 <label htmlFor="number">Phone Number</label>
                 <br />
                 <input
                     type="number"
                     id="number"
                     name="number"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     placeholder="+234-***-***"
                 />
             </div> 
             <div className="inputs">
                 <label htmlFor="countryId">Zip Code</label>
                 <br />
                 <input
                     type="number"
                     id="number"
                     name="number"
                     value={countryId}
                     onChange={(e) => setCountryId(e.target.value)}
                     placeholder="zip"
                 />
             </div>
             <input type="submit" className="submit" value="Register" />
             <br />
         </form>
     </div>
</div>
  )
}

export default Register