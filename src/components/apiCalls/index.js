import axios from "axios";
//import swal from "@sweetalert/with-react";

const BASEURL = "https://solo-crypto.herokuapp.com/account/login";

export const LoginUser  = async (email, password,login_code) => {
	console.log("Base:", BASEURL, email, password);
    const data = {email,password, login_code};
        try {
            const response= await axios.post(`${BASEURL}`, data, {

                       headers: {
                           Accept: "application/json, text/plain, */*",
                           "Content-Type": "application/json ",
                           'X-CSRFTOKEN': 'NSVYXHlsUOppE8lJnLboRqYqKFaFuqsvoLvLhK695tfqWs4OWvJtDFrwyk9elkcl',
                        //    "Allow-Control-Allow-Origin": "*"
                       },
                   })
                   console.log(response)
            return response;
        } catch (err) {
            if (err.response) {
                console.log("Error:", err.response);
                return err.response;
            } 
        }
        // console.log("After login ===>> ", response);
		{/*if (response.data?.statusCode >= 400) {
			const error = response.data.description || response.data.message;
			swal({
				title: "Login Failed",
				icon: "error",
				text: `Reason:  ${error}`,
			});
			return;
		}
		if (response.user?.token) {
			localStorage.setItem("token", response.user.token);
			localStorage.setItem("user", JSON.stringify(response.user));
			window.location.href = "/";
		}*/}

}


const baseURL = "https://solo-crypto.herokuapp.com/account/register";

export const RegisterUser = async(firstName, lastName, email, username, password, phoneNumber, countryId) => {
    console.log("Base:", BASEURL, firstName, lastName, email, username, password, phoneNumber, countryId);
    const data = {firstName, lastName, email, username, password, phoneNumber, countryId}
    try {
        const response= await axios.post(`${BASEURL}`, data, {

            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json ",
                'X-CSRFTOKEN': 'NSVYXHlsUOppE8lJnLboRqYqKFaFuqsvoLvLhK695tfqWs4OWvJtDFrwyk9elkcl',
             //    "Allow-Control-Allow-Origin": "*"
            },
        })
        console.log(response)
        return response;
        
    } catch (err) {
        if (err.response) {
            console.log("Error:", err.response);
            return err.response;
        }    
    }

}
