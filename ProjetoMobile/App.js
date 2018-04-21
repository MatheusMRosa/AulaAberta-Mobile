import React from 'react';
import { StyleSheet } from 'react-native';
import ListarSalas from './listar';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
    }
    componentDidMount() {
        axios.get('https://cesuscmobile.azurewebsites.net/api/sensor/list').then(
            res => {
                console.log('Data:', res.data);
                this.setState(
                    {
                        lista: res.data.map(name => ({ numero: name, ativa: false }))
                    });
                console.log('lista:', this.state.lista);
            }
        ).catch(err => {
            console.log('ERROR:', err);
        })
    }
    render() {
        return (
            <ListarSalas lista={this.state.lista} />
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
