import { connect } from "react-redux";
import { Component } from "react";


class Information extends Component {

    render() {

        let topContent = ''

        if (this.props.isDraw) {
            topContent = 'Ничья'
        } else if (this.props.isGameEnded && !this.props.isDraw) {
            if (this.props.currentPlayer === 'X') {
                topContent = `Победил: 0`
            } else {
                topContent = `Победил: X`
            }
        } else {
            topContent = `Ходит: ${this.props.currentPlayer}`
        }

        return (
            <h1>{topContent}</h1>   
        )
    }
   
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isDraw: state.isDraw,
    isGameEnded: state.isGameEnded
});
export default connect(mapStateToProps)(Information);
