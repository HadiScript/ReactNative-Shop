import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../Constants/Colors'

function CustomHeaders(props) {
    return <HeaderButton {...props} iconSize={25} IconComponent={Ionicons} color={Colors.dark} />
}

export default CustomHeaders
