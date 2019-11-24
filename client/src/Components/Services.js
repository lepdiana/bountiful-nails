import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'

function Services() {
    const { services, getServices} = useContext(CrudContext)

    useEffect(()=> {
        getServices()
    }, [])

    console.log(services)

    const mappedServices = services.map(service => 
                                            <div>
                                                <h1>{service.title}</h1>
                                                <p>${service.amount}</p>
                                            </div>
                                        )

    return(
        <div>
            { mappedServices }
        </div>
    )
}

export default Services