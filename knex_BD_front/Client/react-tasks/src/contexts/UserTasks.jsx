import React, { useState, createContext, useEffect } from "react";

export const AuthUserTasks = createContext({});

export const AuthUserTasksProvider = (props) => {

    const [authenticated, setAuthenticated] = useState(false);

    

    useEffect(() => {
        // localStorage.setItem()
        // localStorage.removeItem()
        const isLoggedIn = localStorage.getItem("isLoggedIn")

        if (!isLoggedIn) {
            return setAuthenticated(false);
        }

        setAuthenticated(true);
        // async function loadStorageData() {
        //     const storageUser = await sessionStorage.getItem('user');
        //     console.log(JSON.parse(storageUser))
        //     if(storageUser){
        //         setUserTasks(JSON.parse(storageUser))
        //     }
        // }
        // loadStorageData();
    },[])

    return(
        <AuthUserTasks.Provider value={{ authenticated, setAuthenticated }} >
            {props.children}
        </AuthUserTasks.Provider>
    );
}