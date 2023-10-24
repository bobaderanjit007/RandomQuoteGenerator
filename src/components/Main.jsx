import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const Main = () => {

    const {data, loading } = useGlobalContext();

    const {content} = data;

    return (
        <>
            <h1 className="heading">Random Quote Generator</h1>
            <h2 className="quote">
                <i className="fa-solid fa-quote-left"></i>
                <span id="quote">{loading ? 'Updating...' : content}</span>
                <i className="fa-solid fa-quote-right"></i>
            </h2>
        </>
    )
}

export default Main
