import Card from "./card";

function Tours({tour, removeTour}) {

    return(
        <div className="Container">
            <div>
            <h2 className="title">Plan Your Trip</h2>
            </div>
            <div className="cards">
                {
                    Tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour} key={tour.id}></Card>
                    } )
                }
            </div>
        </div>
    )
}

export default Tours;