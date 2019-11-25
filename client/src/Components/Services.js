import React, { useEffect, useContext } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'
import Fingernails from './Fingernails.js'
import Toenails from './Toenails.js'
import Both from './Both.js'
import Miscs from './Miscs.js'

function Services() {
    const { getServices } = useContext(CrudContext)

    useEffect(()=> {
        getServices()
    }, [])

    return(
        <div>
            <div>
                <h1>Fingernail Services</h1>
                <Fingernails />
            </div>
            <div>
                <h1>Toenail Services</h1>
                <Toenails />
            </div>
            <div>
                <h1>Both Fingernail and Toenail Services</h1>
                <Both />
            </div>
            <div>
                <h1>Add-ons</h1>
                <Miscs />
            </div>
        </div>
    )
}

export default Services