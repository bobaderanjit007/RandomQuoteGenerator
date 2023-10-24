import React from 'react'
import { useGlobalContext } from '../context/ContextApi'

const Author = () => {

    const {data , loading} = useGlobalContext();

    const {author} = data;

  return (
    <>
        <p className="author" id="author">
            ~ {loading ? 'Loading...' : author}
        </p>
    </>
  )
}

export default Author
