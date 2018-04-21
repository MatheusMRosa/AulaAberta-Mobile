import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

const SensorStatus = props => {
    const { status } = props;
    switch (status) {
        case -1:
            return <Text style={{ color: "grey", position: 'absolute', right: 0 }}>Desconectada</Text>
        case 0:
            return <Text style={{ color: "red", position: 'absolute', right: 0 }}>Luz Ligada</Text>
        case 1:
            return <Text style={{ color: "green", position: 'absolute', right: 0 }}>Luz Desligada</Text>

    }
}
class ListarSalas extends Component {
    componentWillReceiveProps(oldProps, newProps) {
        console.log('componentWillReceiveProps:', oldProps);
        console.log('componentWillReceiveProps:', newProps);
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.lista}
                    renderItem={({ item, index }) =>
                        <View style={{ backgroundColor: 'white', width: '100%' }}
                        ><TouchableOpacity style={{ height: 50 }} >
                                <Text>Número da Sala: {item.numero}</Text>
                                <SensorStatus status={item.status}/>
                            </TouchableOpacity>
                        </View>}
                    keyExtractor={(item, index) => '' + item.numero}
                />
            </View>
        );
    }
}




export default ListarSalas;