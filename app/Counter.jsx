import React from "react";
import { Button, Text, View } from "react-native";

const { Component, Children } = require("react");

class Counter extends Component {
    state = {
        count: 0
    };

    props = {
        Children: React.Children,
    };


    incrementCounter = () => {
        this.setState({count: this.state.count + 1});
    }

    decrementCounter =() => {
        if (this.state.count === 0) {
            return;
        }

        
        this.setState({count: this.state.count - 1});
    }

    render(){
        return (
            <View>
                <Text>Counter: {this.state.count}</Text>
                <Button title="Increment" onPress={this.incrementCounter} />
                <Button title="Decrement" onPress={this.decrementCounter} />
                {this.props.Children}
            </View>
        );
    }
}

export default Counter;