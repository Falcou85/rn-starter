import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {




    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, count: state.count + action.payload};
            case 'decrement':
                return {...state, count: state.count - action.payload};
            default:
                return state
        }
        ;
    }

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return <View>
        <Button title="Increase" onPress={() => dispatch({type: 'increment', payload:2})}/>
        <Button title="Decrease" onPress={() => dispatch({type: 'decrement', payload:1})}/>
        <Text>Current Count: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default CounterScreen;