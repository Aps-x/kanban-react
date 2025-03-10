import './Board.scss'
import ButtonSecondary from '../button-secondary/ButtonSecondary'
import Column from '../column/Column'

function Board() {

    return(
        <main className="board">
            <Column></Column>
            <ButtonSecondary text="Add a list"></ButtonSecondary>
        </main>
    );
}

export default Board