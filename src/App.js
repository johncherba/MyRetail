import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        const url = "http://localhost:9000/api/";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({items: data});
                console.log("state", this.state.items)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {this.state.items.map(((item, index) =>
                        <div key={index}>
                            {item.title}
                            {/*{index.items.}*/}
                        </div>
                ))}

            </div>
        );
    }
}

export default App;
