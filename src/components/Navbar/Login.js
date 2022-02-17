import React,{useState} from 'react';
import {LoginUser} from "../apiCalls/index";
import images from "../data/rent4less-logo-small 1.png";
import "./Nav.css"

export function Login () {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const login = (e) => {
		e.preventDefault();
		LoginUser(email, password );
	};

    // useEffect (() => {
    //     // LoginUser(email, password)
    //     .then((data) => {
    //         console.log(data);
    //         setEmail(data)
    //         setPassword(data)
    //     })
	// },[email, password]);


  return (
   <div className='login'>
       	{localStorage.removeItem("token")}
		{localStorage.removeItem("user")}
			<div className="content">
				<form onSubmit={login}>
					<div className="logo">
						<img src={images} alt="" />
					</div>
					<h2>Login to Rent4less</h2>
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
					<input type="submit" className="submit" value="Log in" />
					<br />
				</form>
			</div>
  </div>
  );
}