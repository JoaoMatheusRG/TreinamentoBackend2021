import React, { useEffect, useState } from "react";
import { AuthUserTasks } from "../../contexts/UserTasks";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './style.scss'

export function Tasks(){

    const [tasksFromUser, setTasksFromUser] = useState([]);
    const [user, setUser] = useState({})

    const { authenticated , setAuthenticated } = React.useContext(AuthUserTasks)
    const history = useHistory();
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const renderItems = tasksFromUser.map( (eachTask) => {
        return (
                <div className="task-item" key={eachTask.id}>
                    <div className="task-card-titulo">
                        <h1>{eachTask.titulo}</h1>
                    </div>
                   
                        <span>{eachTask.descricao.slice(0, [171])}...</span>
                    
                </div>
        );
    })
    
    useEffect( () => {
        getTasksFromUser();
        getInfoFromUser();
        console.log(user)
    }, [])

    async function getInfoFromUser() {
        const id = localStorage.getItem("id");
        
        const { data } = await axios.post('http://localhost:3003/user', {id: id})

     
        setUser(data[0]);
        //return;
    }
    
    async function getTasksFromUser() {
        const id = localStorage.getItem("id");
        
        const { data } = await axios.post('http://localhost:3003/tasks_from_user', {id: id})
        setTasksFromUser( () => {return data})
        
        //return;
    }

    function logoutUser(){
        localStorage.removeItem("isLoggedIn");
        setAuthenticated(false);
        history.push("/")
    }

    if (!isLoggedIn) {
        alert("Usuário não autenticado");
        history.push("/");
    }
    
    return(
        <div className="task">
            <header>
                
                <div className="nome">
                    <h3>{user.nome} {user.sobrenome}</h3>
                </div>
                
                <div className='div-button'>
                    <button onClick={logoutUser}>
                        <span>sair</span>
                    </button>
                </div>
            </header>
            <main>
                <ul>
                    {renderItems}
                </ul>
            </main>
            <footer>
                <h3>Author: João Matheus</h3>
            </footer>
        </div>
    );
}