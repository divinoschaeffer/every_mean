'use client'

import AuthForm from "@/components/AuthForm"
import { login } from "@/actions/auth"

export default function Page(){
    return(
        <AuthForm name="Connexion" formAction={login}></AuthForm>
    )
}