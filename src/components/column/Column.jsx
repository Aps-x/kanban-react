import './Column.scss'

import ButtonSecondary from '../button-secondary/ButtonSecondary'
import Card from '../card/Card'

function Column() {

    return(
        <article className="column | flow">
            <header className="column__header">
                <h2 className="column__title">Assignments</h2>
                <img className="column__settings | icon" src="/dots.svg" alt="" />
            </header>

            <Card></Card>

            <ButtonSecondary text="Add a card"></ButtonSecondary>
        </article>
    );
}

export default Column