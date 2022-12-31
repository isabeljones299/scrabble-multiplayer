import { useState } from 'react';
import "../css/board.css"

const Square = ({ row, col, addTile }) => {

    const id = row + "" + col
    const colourDefinedByOddOrEven = () => {
        if ((row + col) % 2 === 0) {
            return "even";
        }
        return "odd"
    }

    // let [score, setScore] = useState(0)

    return (
        <>

            <p> A square id = {id}  </p>
            <div id={id} className="square" >
                <input
                    className={colourDefinedByOddOrEven()}
                    id={id}
                    maxLength={1}
                    onChange={(event) => addTile(event)}
                />
            </div>
        </>
    )
}

export default Square;