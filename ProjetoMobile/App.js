import React from 'react';
import {StyleSheet} from 'react-native';
import listarSalas from './listar';

const lista = [
    {
        numero: 125,
        ativa: false
    },
    {
        numero: 126,
        ativa: false
    },
    {
        numero: 127,
        ativa: true
    },
    {
        numero: 128,
        ativa: false
    },
    {
        numero: 129,
        ativa: true
    }
];

export default class App extends React.Component {
    render() {
        return (
            <listarSalas lista={lista}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
