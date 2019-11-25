import React, { useContext } from 'react'
import { CrudContext } from '../Context/CrudProvider.js'

const Toenails = () => {
    const { services } = useContext(CrudContext)

    const fingernails = services.filter(toenail => {
        return toenail.category === "toe nails"
    })

    const mappedToenails = fingernails.map((toenail, i) => <div key={i}>
                                                                <h3>{toenail.title}</h3>
                                                                <p>{toenail.amount}</p>
                                                            </div>)

    return(
        <div>
            { mappedToenails }
        </div>
    )
}

export default Toenails