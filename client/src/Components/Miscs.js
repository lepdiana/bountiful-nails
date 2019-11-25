import React, { useContext } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'

const Miscs = () => {
    const { services } = useContext(CrudContext)

    const miscs = services.filter(misc => {
        return misc.category === "misc"
    })

    const mappedMiscs = miscs.map((misc, i) => <div key={i}>
                                            <h3>{misc.title}</h3>
                                            <p>{misc.amount}</p>
                                        </div>)

    return(
        <div>
            { mappedMiscs }
        </div>
    )
}

export default Miscs