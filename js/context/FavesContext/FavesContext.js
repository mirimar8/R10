import React, { Component } from "react";
import { addFave, getFaves, removeFave } from '../../config/model';


const FavesContext = React.createContext();
class FavesProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faveIds: []
        };
    }

    async componentDidMount() {
        let faveIds = await getFaves();
        this.setState({
            faveIds
        })
    }

    addFaveSession = async sessionId => {
        await addFave(sessionId);
        let newFaves = await getFaves();
        this.setState({
            faveIds: newFaves
        })
    }

    removeFaveSession = async sessionId => {
        await removeFave(sessionId);
        let newFaves = await getFaves();
        this.setState({
            faveIds: newFaves
        })
    }



    render() {
        return (
            <FavesContext.Provider
                value={{
                    addFaveSession: this.addFaveSession,
                    removeFaveSession: this.removeFaveSession,
                    faveIds: this.state.faveIds
                }}>
                {this.props.children}
            </FavesContext.Provider>
        );
    }

}


export default FavesProvider;
export { FavesContext };