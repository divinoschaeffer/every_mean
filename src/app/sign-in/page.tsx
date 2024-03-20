'use client'

import AuthForm from "@/components/AuthForm"
import { signIn } from "@/actions/auth"

export default function SignIn(){
    return(
        <AuthForm name="Inscription" formAction={signIn}></AuthForm>
    )
}