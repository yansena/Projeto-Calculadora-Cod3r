import React from 'react';
import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

// import { Container } from './styles';

export function Display(props){
  return (
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            { props.value }
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 50,
        color: '#fff',
    }
})