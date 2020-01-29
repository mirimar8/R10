import React, { Component } from "react";
import queringAllFaves from '../../config/model';
import addFave from '../../config/model';
import removeFave from '../../config/model';


const FavesContext = React.createContext();
class FavesProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faveIds: []
        };
    }

    componentDidMount() {
        getFavedSessionIds = async () => {
            const queryResults = (await queringAllFaves()).map(fave => fave[0]);
            this.setState({
                faveIds: queryResults
            })
        }
    }

    addFaveSession = async sessionId => {
        const addFaveResults = await addFave(sessionId)
        this.setState({
            faveIds: addFaveResults
        })
        this.getFavedSessionIds();

    }

    removeFaveSession = async sessionId => {
        await removeFave(sessionId);
        this.getFavedSessionIds();
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