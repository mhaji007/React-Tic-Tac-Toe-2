import React, {Component} from 'react';

class Player extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>

                <label>
                    Player X
                    <input type="radio" name="player" value="X"/>
                </label>

                <label>
                    Player O
                    <input type="radio" name="player" value="X"/>
                </label>

                <input type="submit" value="Start"/>
            </form>

        )

    }

}

export default Player;