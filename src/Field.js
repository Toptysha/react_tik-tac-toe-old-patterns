import { changeCurrentPlayer, changeField, changeIsDraw, changeIsGameEnded } from './reducer';
import FieldLayout from './FieldLayout';
import { Component } from 'react';
import { connect } from 'react-redux';


class Field extends Component {

    render () {

        console.log(this.props)

        if (!(this.props.isDraw || this.props.isGameEnded)) {

        const WIN_PATTERNS = [
            this.props.field[0][0] === this.props.field[0][1] && this.props.field[0][0] === this.props.field[0][2] && this.props.field[0][0] !== '',
            this.props.field[1][0] === this.props.field[1][1] && this.props.field[1][0] === this.props.field[1][2] && this.props.field[1][0] !== '',
            this.props.field[2][0] === this.props.field[2][1] && this.props.field[2][0] === this.props.field[2][2] && this.props.field[2][0] !== '', 
            this.props.field[0][0] === this.props.field[1][0] && this.props.field[0][0] === this.props.field[2][0] && this.props.field[0][0] !== '', 
            this.props.field[0][1] === this.props.field[1][1] && this.props.field[0][1] === this.props.field[2][1] && this.props.field[0][1] !== '', 
            this.props.field[0][2] === this.props.field[1][2] && this.props.field[0][2] === this.props.field[2][2] && this.props.field[0][2] !== '', 
            this.props.field[0][0] === this.props.field[1][1] && this.props.field[0][0] === this.props.field[2][2] && this.props.field[0][0] !== '', 
            this.props.field[2][0] === this.props.field[1][1] && this.props.field[2][0] === this.props.field[0][2] && this.props.field[2][0] !== '', 
        ]

        if (WIN_PATTERNS.includes(true)){
            this.props.changeIsGameEnded()
        } else if (!this.props.field[0].includes('') && !this.props.field[1].includes('') && !this.props.field[2].includes('')) {
            this.props.changeIsDraw()
            this.props.changeIsGameEnded()
        }
    }

    function click (event, lineIndex, buttonIndex) {
   
        let currentButton = event.target

        if (!(this.props.isDraw || this.props.isGameEnded) && currentButton.textContent === '') {

            currentButton.textContent = this.props.field[lineIndex][buttonIndex]

            this.props.changeField(lineIndex, buttonIndex)

            this.props.changeCurrentPlayer()
        }
    }

    return (
        <FieldLayout click = {click} />    
    )}
}

const mapStateToProps = (state) => ({
    field: state.field,
    isDraw: state.isDraw,
    isGameEnded: state.isGameEnded
});

const mapDispatchToProps = (dispatch) => ({
    changeIsGameEnded: () => dispatch({type: changeIsGameEnded}),
    changeIsDraw: () => dispatch({type: changeIsDraw}),
    changeField: (lineIndex, buttonIndex) => dispatch({type: changeField, payload: [lineIndex, buttonIndex]}),
    changeCurrentPlayer: () => dispatch({type: changeCurrentPlayer})
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
