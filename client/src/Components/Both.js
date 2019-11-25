import React, { useContext } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'

const Both = () => {
    const { services } = useContext(CrudContext)

    const both = services.filter(both => {
        return both.category === "both"
    })

    const mappedBoth = both.map((both, i) => <div key={i}>
                                            <h3>{both.title}</h3>
                                            <p>{both.amount}</p>
                                        </div>)

    return(
        <div>
            { mappedBoth }
        </div>
    )
}

export default Both