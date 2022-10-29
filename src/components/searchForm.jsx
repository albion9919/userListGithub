import React from "react"
import { useNavigate } from "react-router";
import { useUserNameStore, useUserNameInputValueStore} from "../store.jsx"

function SearchForm() {
    const navigate = useNavigate();
    const setUserName = useUserNameStore((state) => state.setUserName)
    const userName = useUserNameStore((state) => state.userName)
    const setUserNameInputValueStore = useUserNameInputValueStore((state) => state.setUserNameInputValue)

    const handleClick = (event) => {
        navigate(`/${userName}`);
        setUserNameInputValueStore(userName)
        event.preventDefault()
    }

    const handleChange = (event) => {
        setUserName(event.target.value)
    }

    return <form className="flex flex-row relative h-32 w-1/2 bg-white hover:bg-indigo-200 p-5 rounded-3xl border-t border-neutral-200 mx-auto items-center justify-center gap-10">
            <input type="search" name="q" placeholder="Employee name" value={userName} onChange={handleChange} className="h-8 flex-basis-3/4 rounded-lg px-4  border-purple bg-indigo-100 outline-indigo-500" />
            <button id="employeeSearchButton" onClick={handleClick} className="float-right h-6 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500  flex-basis-1/4" >Search</button>
        </form>
}

export {SearchForm};