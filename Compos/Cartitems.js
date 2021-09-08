import React from 'react'
import Colors from '../Constants/Colors';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'


function Cartitems(props) {
    return (
        <View style={styles.cartitem}  >
            <View style={styles.itemdata}  >
                <Text style={styles.qty}  > {props.qty} </Text>
                <Text style={styles.title}  > {props.title} </Text>
            </View>

            <View style={styles.itemdata}  >
                <Text style={styles.amount}  > ${props.amount.toFixed} </Text>
                {
                    props.deletable && <TouchableOpacity onPress={props.onRemove} style={styles.deletebtn}  >
                        <Ionicons name="md-trash" size={23} color={Colors.dark} />
                    </TouchableOpacity>
                }

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cartitem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemdata: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        fontSize: 16,
        color: '#888',
    },
    title: { fontSize: 16 },
    amount: { fontSize: 16 },
    deletebtn: {
        marginLeft: 20
    }
});

export default Cartitems
