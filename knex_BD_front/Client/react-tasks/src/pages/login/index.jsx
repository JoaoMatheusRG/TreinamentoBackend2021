import React,{ useState } from "react";
import axios from 'axios';
//import { Tasks } from "../tasks/index.jsx";
import { AuthUserTasks } from "../../contexts/UserTasks"
import { useHistory, Link } from "react-router-dom";
import  './style.scss';

export function Login() {
    const [usuario, setUsuario] = useState('jorgin')
    const [senha, setSenha] = useState('12345')
    const { authenticated, setAuthenticated} = React.useContext(AuthUserTasks)
    const history = useHistory();
    
    
    async function confereUser(){


        // Criando uma requisição para logar no backend
        const { data } = await axios.post('http://localhost:3003/login_user', {usuario: usuario, senha: senha})

        
        // Verifica se o backend confere com os dados entregues
        if (data.connection === "failed") {
            return alert("Usuário ou senha incorretos.");
        }

        // Caso as informações forem válidas, irá mudar a pagina
        localStorage.setItem("id", JSON.stringify(data.id));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setAuthenticated(true);
        history.push('/tasks');


    }
    return(
        <div className='login'>
            <div className='login-container'>
                <div className='login-logo'>
                    <h1>Tarefas.com</h1>
                </div>
                <div className='login-corpo'>
                    <input
                        className='login-corpo-input'
                        onChange={e => setUsuario(e.target.value)}
                        value={usuario} 
                        type="text"
                        placeholder="Usuário"    
                    />
                    
                    <input 
                        className='login-corpo-input'
                        onChange={e => setSenha(e.target.value)}
                        value={senha}
                        type="password"
                        placeholder="Senha"    
                    />
                    <div className='login-link-button'> 
                        <Link className='login-corpo-link' to="/createuser" ><span>Criar conta</span></Link>
                        <button className='login-corpo-button' onClick={confereUser}>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}