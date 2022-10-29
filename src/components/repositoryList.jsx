import React, {useEffect} from 'react'
import {useRepositoriesStore, useUserNameInputValueStore} from "../store.jsx"
import {Repository} from "./repository.jsx";
import axios from "axios";
import "../baseAxiosSettings"

function RepositoryList() {

    const addRepository = useRepositoriesStore((state) => state.addRepository)
    const repositories = useRepositoriesStore((state) => state.repositories)
    const userNameInputValue = useUserNameInputValueStore((state) => state.userNameInputValue)

    async function loadData(userName) {
        let repos = await axios.get(`/users/${userName}/repos`)
        for (let repo of repos.data) {
            let stargazers = await axios.get(`/repos/${userName}/${repo.name}/stargazers`);
            let count;
            if (stargazers.headers.link && stargazers.headers.link.match(/last/gi)) {
                let lastPage = +(stargazers.headers.link.match(/\?page=\d+/gi)[1].split("=")[1]);
                let stargazersLast;
                try {
                    stargazersLast = await  axios.get(`/repos/${userName}/${repo.name}/stargazers?page=${lastPage}`)
                    count = (lastPage-1)*30 + stargazersLast.data.length
                } catch(err) {
                    stargazersLast = await axios.get(`/repos/${userName}/${repo.name}/stargazers?page=${lastPage-1}`)
                    count = (lastPage-2)*30 + stargazersLast.data.length
                }
            } else {
                count = stargazers.data.length
            }
            addRepository(<Repository language={repo.language} description={repo.description} name={repo.name} stars={count}/>)
        }
    }

    useEffect(() => {
        loadData(userNameInputValue)
        return () => {};
    }, [userNameInputValue]);

    return <div> {repositories} </div>

}

export { RepositoryList };


