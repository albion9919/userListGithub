import React from "react";
import "../baseAxiosSettings"
import {useUserStore} from "../store.jsx";

function User() {

    const user = useUserStore((state) => state.user)

    return  <div className="flex flex-row relative h-32 bg-white hover:bg-indigo-200 p-5 rounded-3xl border-t border-neutral-200">
        <div className="flex basis-1/4 justify-center">
            <img src={user.avatar_url} width={100} height={100}/>
        </div>
        <div className="flex basis-3/4 items-center justify-center">
            <span className="block h-6 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500 "> login: {user.login} </span>
            <span className="block h-6 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500 "> name: {user.name} </span>
        </div>
    </div>
}

export {User}