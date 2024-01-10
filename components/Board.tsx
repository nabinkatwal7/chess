import React from 'react';

function createChessboardArray() {
    const rows = 8
    const cols = 8
    const chessboard = Array(rows).fill(0).map(() => Array(cols).fill(0))

    for (let i=0; i<rows;i++){
        for (let j=0; j<cols; j++){
            chessboard[i][j] = `${i}${j}`
        }
    }
    return chessboard
}
function Board() {
    const board = createChessboardArray()
    return (
        <div className="flex flex-col justify-center items-center" >
            {board.map((rows, cols) => (
                <div className={`flex bg-[#f4f4f4] ${cols % 2 ? 'striped-odd' : 'striped'}`} key={cols}>
                    {rows.map((col, index) => (
                        <div className={`w-[100px] h-[100px]`} key={index}>
                            <button className="w-full h-full text-gray-600">
                                {col}
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
