import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

export default function Home() {

  const { data: session } = useSession()

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
      <div className={styles.contInps}>
        <h2>Faça login</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button>Login</button>
      </div>
      <hr />
      <div className={styles.btmDiv}>
        <h3>Ou faça login com:</h3>
        <button onClick={() => signIn()}>Google</button>
      </div>
    </div>
  );
}
