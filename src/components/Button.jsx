import React from 'react'
import { useGlobalContext } from '../context/ContextApi'
import Loader from './Loader';

const Button = () => {

    const { getQuote , loading} = useGlobalContext();

  return (
    <button onClick={getQuote} className="btn" id="btn"> {loading ? <Loader /> : ' Get a quote' }</button>
  )
}

export default Button
