import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";


const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    async function getQuote() {
        try {
            setLoading(true)
            const res = await axios.get('https://api.quotable.io/random')
            setData(res.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error);
        }
    
    }

    useEffect(()=>{
        getQuote()
    },[])

    return(
        <AppContext.Provider value={{data, loading, getQuote}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext , AppProvider}