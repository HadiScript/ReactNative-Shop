import React, { useState } from 'react'
import moment from 'moment';
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../Constants/Colors'
import Cartitems from './Cartitems';

function OrderItems(props) {

    const datte = moment(props.date).format('MMMM Do YYYY, hh:mm');
    const [ShowDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.items} >
            <View style={styles.summary} >
                <Text style={styles.amount} > ${props.amount.toFixed(2)} </Text>
                <Text style={styles.date} > {datte} </Text>
            </View>
            <Button title="Show Detail" type="clear" color={Colors.dark} onPress={() => setShowDetail(p => !p)} />

            {
                ShowDetail && <View>
                    {props.items.map(c => <Cartitems qty={c.quantity} title={c.productTitle} amount={c.sum} />)}
                </View>

            }

        </View>
    )
};

const styles = StyleSheet.create({
    items: {
        backgroundColor: 'white',
        elevation: 8,
        margin: 20,
        padding: 10,
        alignItems: 'center'

    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10

    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 16,
        color: '#888'
    }
})

export default OrderItems
