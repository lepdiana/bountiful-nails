import React, { useState } from 'react'
import axios from 'axios'


export const CrudContext = React.createContext()

function CrudProvider(props) {
    const initState = {
        services: []
    }

    const [serviceState, setServiceState] = useState(initState)

    const getServices = () => {
        axios.get('/api/services')
        .then(res => {
            setServiceState(prevServiceState => ({
                ...prevServiceState,
                services: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    return(
        <CrudContext.Provider 
            value={{
                services: serviceState.services,
                getServices: getServices
            }}>
            { props.children }
        </CrudContext.Provider>
    )
}

export default CrudProvider