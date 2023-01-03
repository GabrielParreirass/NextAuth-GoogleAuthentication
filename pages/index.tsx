import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import { FormEvent } from "react";

export default function Home() {

  const { data: session } = useSession()

  const onSubmit = (e : FormEvent) => {
    e.preventDefault();
    signIn('credentials')
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
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="senha" />
        <button type="submit">Login</button>
      </form>
      <hr />
      <div className={styles.btmDiv}>
        <h3>Ou faça login com:</h3>
        <button onClick={() => signIn()}>Google</button>
      </div>
    </div>
  );
}
