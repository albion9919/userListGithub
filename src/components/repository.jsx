import React from 'react'
import "../styles/index.css"
import {Link} from 'react-router-dom';


function Repository({name, description, language, stars}) {

    let addBoxShadow = (e) => {
        e.target.classList.contains("repository") ? e.target.classList.add("mouseEnterRepository") : null
    }

    let removeBoxShadow = (e) => {
        e.target.classList.contains("repository") ? e.target.classList.remove("mouseEnterRepository") : null
    }

    let tags;
    if (!Array.isArray(language)){
        language = !language ? ['None'] : [language]
    }
    tags =
        language.map(x => <span className="inline-block  rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500">{x}</span>)

    function Tags({tags}){
        return <div className="block basis-1/2">{tags}</div>
    }

    function Name({name}) {
        return  <Link to={name} className="block basis-1/2 underline">{name}</Link>
    }

    function Description({description}) {
        return <div className="basis-6/12 hyphens-auto md:basis-9/12 shrink">{description ? description : "No description"}</div>
    }
    function Stars({stars}) {
        return <div className="float-right h-6 rounded-lg px-4 leading-normal bg-indigo-500 border border-purple text-white hover:bg-white hover:text-indigo-500">{stars}</div>
    }

    return <div className="flex flex-row relative h-32 bg-white hover:bg-indigo-200 p-5 rounded-3xl border-t border-neutral-200" onMouseEnter={addBoxShadow} onMouseLeave={removeBoxShadow}>

        <div className="flex flex-col basis-6/12 items-center hyphens-auto md:basis-3/12 shrink-0">
            <Name name={name}/>
            <Tags tags={tags}/>
        </div>

        <Description description={description}/>
        <Stars stars={stars}/>

    </div>
}

export { Repository };