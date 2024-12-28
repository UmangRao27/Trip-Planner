import Card from "./card";

function Tours({Tours, removeTour}) {

    return(
        <div>
            <div>
            <h2>Plan Your Trip</h2>
            </div>
            <div>
                {
                    Tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    )
}

export default Tours;