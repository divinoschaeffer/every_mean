import { Rubik } from "next/font/google";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { User, formUser } from "@/types";
import { useRouter } from "next/navigation";

const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
  })

export default function AuthForm({name, formAction}: {name: string, formAction: (formData: formUser) => Promise<User>}){

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [authError, setAuthError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const router = useRouter();

    function displayError(func: (bool: boolean) => void): void{
        func(true);
            setTimeout(() => {
                func(false);
            }, 2000);
    }

    async function handleSubmit(e: MouseEvent){
        e.preventDefault();

        if(email === ""){
            displayError(setEmailError);
            return;
        }

        if(password.length < 6){
            displayError(setPasswordError);
            return;
        }

        const formData: formUser = {
            email: email,
            password: password
        }
        try {
            const user: User = await formAction(formData);
            sessionStorage.setItem('user', JSON.stringify(user));
            router.push("/dashboard");
        } catch (error) {
            displayError(setAuthError)
        }
    }

    return(
        <div className="flex flex-col h-screen">
            <header className="flex p-4 place-self-start">
                <Link href="/">
                <h1 className={rubik.className + ` text-2xl` }>Every-Mean</h1>
                </Link>
            </header>
            <div className="flex flex-col justify-center h-full">    
                <form className="flex flex-col self-center space-y-4 w-full md:w-1/4">
                    <h2 className={rubik.className + " text-center text-3xl mb-4"}>{name}</h2>
                    <div className="flex flex-col">
                        <label>E-mail</label>
                        <input className="pl-2 bg-gray-light text-gray-medium" placeholder="Entrez votre e-mail" type="email" required={true} onChange={e => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Mot de passe</label>
                        <input className="pl-2 bg-gray-light text-gray-medium" placeholder="Entre votre mot de passe" required={true} type="password" onChange={e => setPassword(e.target.value)} value={password}></input>
                    </div>
                    <button className="text-white bg-blue" onClick={e => handleSubmit(e)}>Passez à la suite</button>
                    {(authError) ? <p className="text-center">Mauvais mot de passe ou email</p> : null}
                    {(passwordError) ? <p className="text-center bg-red text-white">Mot de passe trop court</p> : null}
                    {(emailError) ? <p className="text-center bg-red text-white">L'email ne pas être vide</p> : null}
                </form>
            </div>
        </div>
    )
}