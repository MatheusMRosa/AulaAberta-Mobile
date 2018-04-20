import React, {Component} from 'react';
import {Text, View} from 'react-native';


class listarSalas extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.lista.map((item, index) => (
                    <text>
                        <text>Número da Sala</text>
                        <Text>{item.numero}</Text>
                        {(item.ativa ?
                                (<text style={color = "red"}>Luz Acesa</text>)
                                : (<text style={color = "green"}>Luz Apagada</text>)
                        )}
                    </text>
                ))}
            </View>
        );
    }
}

export default listarSalas;