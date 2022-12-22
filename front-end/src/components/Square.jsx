import { useState } from 'react';

const Square = ({ row, col, addTile }) => {

    const id = row + "" + col

    // let [score, setScore] = useState(0)

    return (
        <>
            <p> A square id = {id}  </p>
            <div id={id} className="square" >
                <input
                    className="tile0"
                    id={id}
                    maxLength="1"
                    onChange={(event) => addTile(event)}
                />
            </div>
        </>
    )
}

export default Square;