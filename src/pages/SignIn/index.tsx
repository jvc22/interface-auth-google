import { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { GoogleLogo } from 'phosphor-react';
import './styles.scss';

export function SignIn(){

    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            console.log(result.user.photoURL);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <div className="container">
            <div className="user">
                <div className='user1'>
                    {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
                </div>
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
            
            <h1>Acesse sua conta</h1>

            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google, a vida <br /> do usuário é facilitada, permitindo-se utilizar sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
    );
}