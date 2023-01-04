import { useState } from 'react';
import Square from "./Square"
import "../css/board.css"

const BuildBoardGrid = () => {
    const row = [0, 1, 2]
    const col = [0, 1, 2]
    const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
    let [score, setScore] = useState(Number(0))
    let [matrix, setMatrix] = useState(createMatrix(col, row))
    // let tilesCopyNew: object[] = [];
    // let arrayOfTileObjects: { [key: string]: string }[] = [];
    type Tile = {
        [key: string]: number;

    }


    function createMatrix(columns: number[], rows: number[]): Tile[][] {

        const matrix: Tile[][] = [];
        for (let i = 0; i < rows.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < columns.length; j++) {
                let tile = { [(i.toString() + j.toString())]: 0 }
                matrix[i][j] = tile

            }
        }
        return matrix;
    }



    // let tileMatrix = [row.map(row => (
    //     col.map(col => (
    //         row + "" + col
    //     ))))]

    // for (let arrayRow = 0; arrayRow < tileMatrix[0].length; arrayRow++) {
    //     console.log(tileMatrix)
    //     arrayOfTileObjects = arrayOfTileObjects.concat(tileMatrix[0][arrayRow] as [])
    // }
    // for (let item = 0; item < arrayOfTileObjects.length; item++) {
    //     arrayOfTileObjects[item] = { key: arrayOfTileObjects[item].key, value: "" }
    // }



    //let tileArray = Array(225).fill(''); //put tile array in useState below
    // const [tiles, setTiles] = useState([{ 1_1: "a" }, { 1_2: "b" }]);
    const [tiles, setTiles] = useState(matrix)
    let tilesCopy = [...tiles];

    const addTile = (e) => {
        const { id, value } = e.target;
        // function changeMatrix(columns: number[], rows: number[]): Tile[][] {
        const matrix: Tile[][] = [];
        for (let i = 0; i < row.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < col.length; j++) {
                let tile = { [(i.toString() + j.toString())]: (((i.toString() + j.toString()) === id.toString()) ? aB[value] : 0) }
                matrix[i][j] = tile

            }
        }
        setMatrix(matrix)
        setTiles(matrix)
        console.log(matrix)
    }

    // for (let i = 0; i < (matrix|| 0).length; i++) {
    //     var col = matrix[i];
    //     for (let j = 0; j < (col || 0).length; j++)
    //         console.log(col[1].key)
    //     console.log(id)
    //     if (col[1].key === id.toString()) {
    //         console.log("match")
    //         let tile = { [col[1].key]: "" }
    //     }
    // }



    const scoreWord = () => {
        //  console.log(tilesCopy[0].value)
        // for (let i = 0; i < (tilesCopy || 0).length; i++) {
        //     const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
        //     matrix.filter(m => m.values)
        //     // score += (aB[matrix[i].value.toLowerCase()] || 0)
        //     console.log(score)
        // }


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // console.log((matrix[i][j][(i.toString() + j.toString())]))
                console.log(score)
                console.log(matrix[i][j][(i.toString() + j.toString())])
                score = score + Number(matrix[i][j][(i.toString() + j.toString())]);

            }
        }

        console.log(score)
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