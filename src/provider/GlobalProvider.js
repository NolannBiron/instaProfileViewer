import axios from "axios";
import React from "react";

const GlobalContext = React.createContext({});

class GlobalProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           proxies: []

        }

        this.actions = {
            getRandomProxies: this.getRandomProxies
        }
    }

    getRandomProxies = async () => {

        let proxies = await axios({
            method: 'GET',
            url: 'https://proxy-orbit1.p.rapidapi.com/v1/',
            headers: {
                'x-rapidapi-key': '5a280654b8msh299b14289f70df3p11f0b5jsnd966d6617889',
                'x-rapidapi-host': 'proxy-orbit1.p.rapidapi.com'
            }
        })
        this.setState({proxies: proxies});
        return proxies.data;
    }



    render() {
        return (
            <GlobalContext.Provider value={{ global : {state: this.state, actions: this.actions} }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export { GlobalProvider as default, GlobalContext }