import React from 'react'
import {SearchForm} from "./components/searchForm.jsx"
import {CommitsList} from "./components/commitsList.jsx"
import "./styles/index.css"
import {
    Routes,
    Route,
} from 'react-router-dom';
import {UserProfileRepositories} from "./components/userProfileRepositories.jsx";


function App() {

    return <div className="container mx-auto">
        <SearchForm/>
        <Routes>
            <Route path=":userName" element={ <UserProfileRepositories/> } />
            <Route path=":userName/:repo" element={ <CommitsList/> } />
        </Routes>
    </div>

}
export default App

