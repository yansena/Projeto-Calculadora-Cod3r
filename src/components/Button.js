import React, { Component } from 'react';
import { 
    StyleSheet,
    Dimensions,
    Text,
    TouchableHighlight
} from 'react-native';

// import { Container } from './styles';

export function Button(props){
    const stylesButon = [styles.button];
    if(props.double) stylesButon.push(styles.buttonDouble)
    if(props.triple) stylesButon.push(styles.buttonTriple)
    if(props.operation) stylesButon.push(styles.operationButton)
    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)} >
            <Text style={stylesButon}> { props.label } </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        width: Dimensions.get('window').width / 4,
        padding: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})