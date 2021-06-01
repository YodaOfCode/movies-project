import React from "react";
import Header from "./layout/Header";
import {nanoid} from 'nanoid'
import uuid from 'react-uuid'
import Footer from "./layout/Footer";
import {Main} from "./layout/Main";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
