

function Tours({Tours}) {

    return(
        <div>
            <div>
            <h2>Plan Your Trip</h2>
            </div>
            <div>
                {
                    Tours.map( (Tour) => {
                        return <Card {...Tour}></Card>
                    } )
                }
            </div>
        </div>
    )
}

export default Tours;