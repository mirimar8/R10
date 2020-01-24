import React, { Component } from "react";
import queringAllFaves from '../config/model'
import { FlatList } from "react-native-gesture-handler";

export const FavesContext = React.createContext();
class FavesProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faveIds: []
        };
    }

    componentDidMount() {
        getFavedSessionIds = async () => {
            const results = (await queringAllFaves()).map(fave => fave[0]);
            this.setState({
                faveIds: results
            })
        }
    }

    render() {
        return (
            <FavesContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </FavesContext.Provider>
        );
    }
    // more code will go here!
}
export default FavesProvider;