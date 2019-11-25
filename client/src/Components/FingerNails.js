import React, { useContext } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'

const Fingernails = () => {
    const { services } = useContext(CrudContext)

    const fingernails = services.filter(fingernail => {
        return fingernail.category === "finger nails"
    })

    const mappedFingernails = fingernails.map((fingernail, i) => <div key={i}>
                                                                <h3>{fingernail.title}</h3>
                                                                <p>{fingernail.amount}</p>
                                                            </div>)
    return(
        <div>
           { mappedFingernails }
        </div>
    )
}

export default Fingernails