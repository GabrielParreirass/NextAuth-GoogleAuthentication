import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import { FormEvent, useState } from "react";

export default function Home() {

  const { data: session } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e : FormEvent) => {
    e.preventDefault();
    

    signIn("credentials", { email: email, password: password })
  }



  if(session){
    return(
      <div className={styles.signOutCont}>
        <h2>Olá, {session.user?.name}</h2>
        <div> <Image alt="profile" width="100" height="100" src={session.user?.image!}></Image>  </div>
        <hr />
        <button onClick={() => signOut()}>LogOut</button>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <form className={styles.contInps} onSubmit={(e)=> onSubmit(e)}>
        <h2>Faça login</h2>
        <input type="email" name="email" placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="senha" id="senha" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      <hr />
      <div className={styles.btmDiv}>
        <h3>Ou faça login com:</h3>
        <button onClick={() => signIn('google')}>Google</button>
      </div>
    </div>
  );
}
