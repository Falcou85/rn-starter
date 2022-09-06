import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Hello</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title="Go to Component Demo"/>
            <Button
                onPress={() => navigation.navigate('List')}
                title="Go to List"/>

            <Button
                onPress={() => navigation.navigate('Images')}
                title="Go to Image"/>

            <Button
                onPress={() => navigation.navigate('Counter')}
                title="Go to Counter"/>

            <Button
                onPress={() => navigation.navigate('Color')}
                title="Go to Color"/>

            <Button
            onPress={() => navigation.navigate('Square')}
            title="Go to Square"/>

            <Button
                onPress={() => navigation.navigate('Text')}
                title="Go to Text"/>

            <Button
                onPress={() => navigation.navigate('Box')}
                title="Go to Box"/>



        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
    },
});

export default HomeScreen;
