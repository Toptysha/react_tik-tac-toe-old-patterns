import Field from "./Field";
import Information from "./Information";
import styles from './styles/game.module.css';
import { initState } from './reducer';
import { Component } from "react";
import { connect } from "react-redux";

class GameLayout extends Component {

    render() {
        return (
            <div className={styles.container}> 
                <Information />
                <Field />
                <button className={styles.newGameButton} onClick={() => this.props.startNewGame()}>Начать новую игру</button>
            </div>  
        )
    } 
    
    // render() {
    //     return (
    //         <div className="m-auto mt-12 w-48 text-center"> 
    //             <Information />
    //             <Field />
    //             <button className="newGameButton m-auto" onClick={() => this.props.startNewGame()}>Начать новую игру</button>
    //         </div>  
    //     )
    // } 
};

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => dispatch({type: initState})
    }
};
export default connect(null, mapDispatchToProps)(GameLayout);
