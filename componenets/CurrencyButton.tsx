import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}> 

/**
 * Renders a button with country name and flag.
 * @param {CurrencyButtonProps} props - The props object containing name and flag.
 * @returns {JSX.Element} - A JSX Element representing the CurrencyButton component.
 */
const CurrencyButton = (props: CurrencyButtonProps) : JSX.Element => {
    return (
        <View style={styles.buttonContainer} > 
           <Text style={styles.country} >{props.name}</Text>
           <Text style={styles.flag} >{props.flag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})

export default CurrencyButton

