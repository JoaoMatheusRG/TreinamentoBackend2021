import { useState } from "react";
import axios from "axios"
import './style.scss'
import { useHistory } from "react-router-dom";

export function CreateUser() {
    const [usuario, setUsuario] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [celular, setCelular] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const history = useHistory();

    async function confereDados(){
        if(senha === confirmarSenha){
            const user = {
                usuario: usuario,
                nome: nome,
                sobrenome: sobrenome,
                celular: celular,
                senha: senha
            }
            //console.log(user)
            const createUser = await axios.post('http://localhost:3003/users/', user)
            //console.log(createUser.data)
        }else{
            alert('As senhas não coincidem')
        }
    }

    function voltar() {
        history.push('/')
    }

    return(
        <div className='createUser'>

            <div className='container'> 

                <div className='logo'>
                    <h1>Criar Usuario</h1>
                </div>

                <div className='corpo'>
                    <input
                        className='inputs'
                        onChange={e => setUsuario(e.target.value)}
                        value={usuario} 
                        type="text"
                        placeholder="Usuário"    
                    />
                    <input 
                        className='inputs'
                        onChange={e => setNome(e.target.value)}
                        value={nome}
                        type="text"
                        placeholder="Nome"    
                    />
                    <input  
                        className='inputs'
                        onChange={e => setSobrenome(e.target.value)}
                        value={sobrenome}
                        type="text"
                        placeholder="Sobrenome"    
                    />
                    <input
                        className='inputs'
                        onChange={e => setCelular(e.target.value)}
                        value={celular} 
                        type="text"
                        placeholder="Celular"    
                    />
                    <input 
                        className='inputs'
                        onChange={e => setSenha(e.target.value)}
                        value={senha}
                        type="password"
                        placeholder="Senha"    
                    />
                    <input 
                        className='inputs'
                        onChange={e => setConfirmarSenha(e.target.value)}
                        value={confirmarSenha}
                        type="password"
                        placeholder="Confirmar Senha"    
                    />
                    <button  className='createUser-button' onClick={voltar}>Voltar</button>
                    <button className='createUser-button' onClick={confereDados}>Criar Conta</button>
                </div>
          </div>
        </div>
    );
}