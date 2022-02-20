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


const baseURL = "https://solo-crypto.herokuapp.com/account/register";

export const RegisterUser = async(firstName, lastName, email, username, password, phoneNumber, countryId) => {
    console.log("Base:", BASEURL, firstName, lastName, email, username, password, phoneNumber, countryId);
    const data = {firstName, lastName, email, username, password, phoneNumber, countryId}
    try {
        const response= await axios.post(`${baseURL}`, data, {

            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json ",
                'X-CSRFTOKEN': 'NSVYXHlsUOppE8lJnLboRqYqKFaFuqsvoLvLhK695tfqWs4OWvJtDFrwyk9elkcl',
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

const baseUrl = "https://rent-4-less-iyqm7.ondigitalocean.app/";

export async function getProperties() {
    console.log("Base:", baseUrl);
    try {
        const data = await axios.get(`${baseUrl}`, {
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json ",
            },
        });
        console.log("api ", data.data);
        return data.data;

    } catch (err) {
        console.log("Error:", err.response);
        return err.response;
    }
}