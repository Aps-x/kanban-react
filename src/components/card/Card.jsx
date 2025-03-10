import './Card.scss'

function Card(props) {

    return(
        <article className="card | flow">
                <p className="card__label">Class</p>

                <h3 className="card__title">Assignment</h3>

                <div className="even-columns">
                    <div>
                        <img className="icon" src="/clock.svg" alt="" />
                        <time className="card__datetime" datetime="">Apr 1</time>
                    </div>

                    <div className="ml-auto">
                        <img className="icon" src="/weight.svg" alt="" />
                        <p className="card__weighting">30%</p>
                    </div>
                </div>
            </article>
    );
}

export default Card