import { useState } from 'react';
import Square from "./Square"
import "../css/board.css"

const BuildBoardGrid = () => {
    let [score, setScore] = useState(0)
    // let tilesCopyNew: object[] = [];
    let tilesCopyNew: { [key: string]: string }[] = [];
    const row = [1, 2, 3]
    const col = [1, 2, 3]





    let tileArray = [row.map(row => (
        col.map(col => (
            row + "" + col
        ))))]

    for (let arrayRow = 0; arrayRow < tileArray[0].length; arrayRow++) {

        tilesCopyNew = tilesCopyNew.concat(tileArray[0][arrayRow] as [])
    }
    for (let item = 0; item < tilesCopyNew.length; item++) {
        tilesCopyNew[item] = { key: tilesCopyNew[item].key, value: "" }
    }



    //let tileArray = Array(225).fill(''); //put tile array in useState below
    // const [tiles, setTiles] = useState([{ 1_1: "a" }, { 1_2: "b" }]);
    const [tiles, setTiles] = useState(tilesCopyNew)
    let tilesCopy = [...tiles];

    const addTile = (e) => {

        console.log(tilesCopyNew)
        console.log(tiles)

        const { id, value } = e.target;
        for (let i = 0; i < (tilesCopy || 0).length; i++) {
            (tilesCopy[i].key as string === id) && (tilesCopy[i].value = value);
            console.log()
        }
        setTiles(tilesCopy)
        console.log(tiles)
    }
    const scoreWord = () => {
        console.log(tilesCopy[0].value)
        for (let i = 0; i < (tilesCopy || 0).length; i++) {
            const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
            score += (aB[tilesCopy[i].value.toLowerCase()] || 0)
            console.log(score)
        }
        setScore(score)
    }

    const resetScore = () => {
        setScore(0)

    }



    return (
        <>

            <button className='inputDivDC btn btn-info' onClick={scoreWord}>
                Submit
            </button>
            <button className='inputDivDC btn btn-info' onClick={resetScore}>
                Reset Score
            </button>
            <div>
                <p>Your score is..{score} </p>
                <div className='board'>
                    {row.map(row => (

                        col.map(col => (

                            <Square key={row + "_" + col as React.Key} row={row} col={col} addTile={addTile} />
                        ))))}

                </div>
            </div>

        </>
    )


}

export default BuildBoardGrid;