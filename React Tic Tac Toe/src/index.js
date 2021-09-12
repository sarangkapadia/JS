import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

// function component
function Square(props) {
    return (
        <button className="square" onClick={props.onClick} style={props.backgroundColor}>
            {props.value}
        </button >
    );
}

class Board extends React.Component {
    renderSquare(i) {
        let bkColor;

        if (this.props.winners.includes(i)) {
            bkColor = { backgroundColor: 'lightgreen' };
        } else {
            bkColor = { backgroundColor: 'lightskyblue' };
        }
        return (
            <Square
                onClick={() => this.props.onClick(i)}
                value={this.props.squares[i]}
                backgroundColor={bkColor}
            />
        );
    }

    render() {
        return (
            <div> {/* wrap 3 into 1 element */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div >
        );
    }
}
/*
class TimeCapsule extends React.Component {
    render() {
        let elements = [];

        for (let index = 0; index < this.props.numberOfMoves; index++) {
            elements.push(
                <li key={index}>
                    <button className="moveButton" onClick={() => this.props.onClick(index)} >
                        {"Go to " + (index === 0 ? "start" : index)}
                    </button>
                </li>
            );
        }

        return (
            <div>
                {elements}
            </div>
        )
    }
}
*/

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            xIsNext: true,
            moveCount: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.moveCount + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        let winners = { cells: [null, null, null] };
        if (squares[i] || calculateWinner(squares, winners)) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            moveCount: history.length,
        });
    }

    handleGotoMove(moveCount) {
        const xIsNext = moveCount % 2 ? false : true;
        this.setState({
            moveCount: moveCount,
            xIsNext: xIsNext,
        });
    }

    render() {
        const history = this.state.history;
        let winners = { cells: [null, null, null] };
        const current = history[this.state.moveCount];
        const winner = calculateWinner(current.squares, winners);
        let status;
        let winningMoveCount = -1;

        if (winner) {
            status = 'Winner: ' + winner;
            winningMoveCount = this.state.moveCount;
        } else if (this.state.moveCount < 9) {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        } else {
            status = 'Game draw'
        }

        const moves = history.map((element, count) => {
            let backgroundColor;
            if (count === winningMoveCount) {
                backgroundColor = { backgroundColor: 'lightgreen' };
            }

            return (
                <li key={count}>
                    <button className="moveButton" onClick={() => this.handleGotoMove(count)} style={backgroundColor}>
                        {"Goto " + (count ? count : "start")}
                    </button>
                </li>
            )
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winners={winners.cells}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>
                        {moves/* {
                        <TimeCapsule
                            onClick={(moveCount) => this.handleGotoMove(moveCount)}
                            numberOfMoves={this.state.history.length}
                        />} */}
                    </ol>
                </div>
                <div className="time">

                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares, _winning) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            _winning.cells = [a, b, c];
            return squares[a];
        }
    }

    return null;
}