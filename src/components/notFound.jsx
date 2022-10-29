import React from "react";

function NotFound({info}){
    return <div className="flex flex-row relative h-16 w-1/2 bg-white hover:bg-indigo-200 p-5 rounded-3xl border-t border-neutral-200 mx-auto items-center justify-center gap-10">
        <span className="float-right h-6 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500  flex-basis-1/4"> Not found {info}</span>
    </div>
}

export {NotFound}
