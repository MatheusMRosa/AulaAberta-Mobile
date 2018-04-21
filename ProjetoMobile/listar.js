import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';


class ListarSalas extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.lista}
                    renderItem={({ item, index }) =>
                        <View style={{ backgroundColor: 'white', width:'100%' }}
                        ><TouchableOpacity style={{height:50}} >
                                <Text>Número da Sala: {item.numero}</Text>
                                {(item.ativa ?
                                    (<Text style={{ color: "red", position:'absolute', right:0 }}>Luz Acesa</Text>)
                                    : (<Text style={{ color: "green", position:'absolute', right:0 }}>Luz Apagada</Text>)
                                )}
                            </TouchableOpacity>
                        </View>}
                    keyExtractor={(item, index) => '' + item.numero}
                />
            </View>
        );
    }
}




export default ListarSalas;