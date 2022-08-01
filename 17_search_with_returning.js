const flights = [
    {
        from: 'HNL',
        to: 'AKL'
    },
    {
        from: 'YUL',
        to: 'ORD'
    },
    {
        from: 'AKL',
        to: 'KLD'
    },
    {
        from: 'KLD',
        to: 'DME'
    },
    {
        from: 'SFO',
        to: 'HNL'
    },
    {
        from: 'ORD',
        to: 'SFO'
    }
]
let count = 0

function getTrip(flights, tripArray) {
    if (flights.length === 0) return tripArray

    const lastStop = tripArray[tripArray.length - 1]

    for (const flight of flights) {
        count++
        if (flight.from === lastStop) {
            tripArray.push(flight.to)
            return getTrip(flights.filter(f => f !== flight), tripArray)
        }
    }
}

console.log(getTrip(flights, ['YUL']))
