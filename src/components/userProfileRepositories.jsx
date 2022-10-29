import {useParams} from "react-router-dom";

const React = require("react");
import {RepositoryList} from "./repositoryList.jsx";
import {User} from "./user.jsx";
import {useEffect} from "react";
import {useRepositoriesStore, useUserNameInputValueStore, useUserStore, useDisplayStore} from "../store.jsx";
import axios from "axios";
import {NotFound} from "./notFound.jsx";

function UserProfileRepositories(){

    const { userName } = useParams();
    const userNameInputValue = useUserNameInputValueStore((state) => state.userNameInputValue)
    const setUserNameInputValue = useUserNameInputValueStore((state) => state.setUserNameInputValue)
    const removeAllRepositories = useRepositoriesStore((state) => state.removeAllRepositories)
    const setDisplay = useDisplayStore((state) => state.setDisplay)
    const display = useDisplayStore((state) => state.display)
    const setUser = useUserStore((state) => state.setUser)


    useEffect(() => {
        removeAllRepositories()
        if (userNameInputValue) {
            axios.get(`/users/${userNameInputValue}`)
                .then(response => {
                    setDisplay(true)
                    setUser({name:response.data.name,
                        avatar_url: response.data.avatar_url, login:  response.data.login})
                })
            .catch(err => {setDisplay(false)})
        }
        return () => {};
    }, [userNameInputValue]);

    useEffect(() => {
        if (userName !== userNameInputValue) {
            setUserNameInputValue(userName)
        }
    }, []);

    return <>
        {display ? <User/> : ""}
        {display ? <RepositoryList/> : ""}
        {!display ? <NotFound/> : ""}
    </>
}

export {UserProfileRepositories}