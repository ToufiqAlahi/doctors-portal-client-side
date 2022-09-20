import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        
    }, [user]);

    return [token];
}

export default useToken;