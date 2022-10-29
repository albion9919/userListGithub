import React from 'react'
import "../styles/index.css"

function Commit({author, hash, date}) {
    return <div className="flex flex-row relative h-32 bg-white hover:bg-indigo-200 p-5 rounded-3xl border-t border-neutral-200 items-center">
        <div className="basis-1/3">
            <span className="block rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500"> {author} </span>
        </div>
        <div className="basis-1/3">
            <span className="block rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500"> {hash} </span>
        </div>
        <div className="basis-1/3">
            <span className="block rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500"> {date} </span>
        </div>
    </div>
}

export {Commit}