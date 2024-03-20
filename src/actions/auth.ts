"use server "
import axios from "axios";
import { User, formUser } from "@/types";

const base_url: string = "http://localhost:3001/";

export async function signIn(formData: formUser) : Promise<User>{
    try {
        const response = await axios.post(base_url + "api/auth/sign-in", formData, {withCredentials: true});
        return response.data.user;
    } catch (error) {
        console.log(error);
        throw Error;
    }
}

export async function login(formData: formUser) : Promise<User>{
    try {
        const response = await axios.post(base_url + "api/auth/login", formData, {withCredentials: true});
        return response.data.user;
    } catch (error) {
        console.log(error);
        throw Error;
    }
}