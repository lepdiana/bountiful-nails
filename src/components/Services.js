import React from 'react'

const Services = () => {

    const serviceSchema = [
        {
            title: 'Fullset with white/regular tips',
            amount: 25
        },
        {
            title: 'Fullset with color/glitter tips',
            amount: 35
        },
        {
            title: 'Fullset with dipping powder',
            amount: 45
        },
        {
            title: 'Fullset with shellac gel color',
            amount: 40
        },
        {
            title: 'Fullset on toe nails',
            amount: 30
        },
        {
            title: 'Fill with regular nail polish',
            amount: 18
        },
        {
            title: 'Fill with shellac gel polish',
            amount: 30
        },
        {
            title: 'Back fill with pink & white powder',
            amount: 25
        },
        {
            title: 'Back fill with color powder',
            amount: 30
        },
        {
            title: 'Regular pedicure',
            amount: 23
        },
        {
            title: 'Manicure',
            amount: 15
        },
        {
            title: 'Regular pedicure and manicure',
            amount: 35
        },
        {
            title: 'Regular pedicure with shellac gel polish',
            amount: 35
        },
        {
            title: 'Glitter powder on toe nails',
            amount: 25
        },
        {
            title: 'Deluxe pedicure',
            amount: 33
        },
        {
            title: 'Manicure with shellac gel polish',
            amount: 25
        },
        {
            title: 'Manicure with dipping powder',
            amount: 40
        },
        {
            title: 'Dipping powder without manicure',
            amount: 35
        },
        {
            title: 'Shellac gel polish without manicure',
            amount: 20
        },
        {
            title: 'Clear gel top coat',
            amount: '+5'
        },
        {
            title: 'Nail design',
            amount: '+5 and up'
        },
        {
            title: 'Regular polish change',
            amount: 8
        },
        {
            title: 'Nail removal',
            amount: '+5 and up'
        }
    ]

    return( 
        <div>
            {serviceSchema.map((service, i) => <div key={i}>
                                            <h2>{service.title}</h2>
                                            <p>${service.amount}</p>
                                        </div>)}
        <p>*Prices may vary dependings on the circumstances. If you have any questions regarding the price, please don't hesitate to ask.*</p>
        </div>
    )
}

export default Services