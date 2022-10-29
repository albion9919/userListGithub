import React, {useEffect} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";
import {Commit} from "./commit.jsx";
import {useCommitsStore} from "../store.jsx";
import "../baseAxiosSettings"
import {useNavigate} from "react-router";


function CommitsList() {
    const { userName, repo } = useParams();

    const addCommits = useCommitsStore((state) => state.addCommits)
    const removeAllCommits = useCommitsStore((state) => state.removeAllCommits)
    const commits = useCommitsStore((state) => state.commits)
    const navigate = useNavigate();

    async function loadCommits(userName, repo) {

        removeAllCommits()
        let response = await axios.get(`/repos/${userName}/${repo}/commits`)
        addCommits([...response.data].map(x => <Commit author={x.commit.author.name} hash={x.sha} date={x.commit.author.date}/>))

        while (response.headers.link && response.headers.link.match(/next/gi)) {
            let nextPage = +(response.headers.link.match(/\?page=\d+/gi)[0].split("=")[1]);
            response = await axios.get(`/repos/${userName}/${repo}/commits?page=${nextPage}`)
            addCommits([...response.data].map(x => <Commit author={x.commit.author.name} hash={x.sha} date={x.commit.author.date}/>))
        }
    }

    useEffect(() => {
        loadCommits(userName, repo)
        return () => {};
    }, []);

    return <div>
        <button onClick={() => navigate(-1)} className="block h-6 mx-auto my-5 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500" >Back</button>
        {commits}
    </div>
}

export {CommitsList}