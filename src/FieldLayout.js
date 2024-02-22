import { Component } from 'react';
import styles from './styles/field.module.css';
import { connect } from 'react-redux';
import { changeCurrentPlayer, changeField } from './reducer';


class FieldLayout extends Component {

    constructor({click}) {
        super()
        this.click = click
    }

    render() {
        return (  
            <div className={styles.game}>
                {this.props.field.map((line, lineIndex) => {
                    return (
                        <div className={styles.buttonsLine} >
                            {line.map((_, buttonIndex) => {
                                return (
                                    <div className={styles.button} onClick={event => this.click(event, lineIndex, buttonIndex)}>
                                        {this.props.field[lineIndex][buttonIndex]}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div> 
        )
    }   
}

const mapStateToProps = (state) => ({
    field: state.field,
    isDraw: state.isDraw,
    isGameEnded: state.isGameEnded
});
const mapDispatchToProps = (dispatch) => ({
    changeField: (lineIndex, buttonIndex) => dispatch({type: changeField, payload: [lineIndex, buttonIndex]}),
    changeCurrentPlayer: () => dispatch({type: changeCurrentPlayer})
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldLayout);
