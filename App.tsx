import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CurrencyButton from './componenets/CurrencyButton';
import { currencyByRupee } from './constants';
import { Button, Snackbar, TextInput } from 'react-native-paper';




export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  
  const buttonPressed = (targetValue: Currency) => {
    console.log("Clicked",targetValue)
    if (!inputValue) {
      return(
        <Snackbar
        visible={true}
        duration={5000}
        onDismiss={() => {}}
      >
        "Enter a value to convert",
      </Snackbar>
      )
      
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
       return(
        <Snackbar
        visible={true}
        duration={5000}
        onDismiss={() => {}}
      >
        "Enter valid number",
      </Snackbar>
       )
    }
  }
  return (
    
     
    <View style={styles.container}>
          <View style={styles.topContainer} >
             <View style={styles.rupeesContainer} >
                <Text style={styles.rupee}>Rs</Text>
                <TextInput
                  maxLength={10}
                  placeholder="Enter Amount"
                  style={styles.inputAmountField}
                  keyboardType="numeric"
                  onChangeText={setInputValue}
                  value={inputValue}
                />
             </View>
             {resultValue && (
                <View>
                  <Text style={styles.resultTxt}>{resultValue}</Text>
                  <Text style={styles.resultTxt}>{targetCurrency}</Text>
                </View>
              )}
            </View>
            <View style={styles.bottomContainer} >
               <FlatList
                 numColumns={3}
                 data={currencyByRupee}
                 keyExtractor={(item) => item.name}
                 renderItem={({item})=>(
                  <Pressable 
                    style={[styles.button, item.name === targetCurrency && styles.selected]}
                    onPress={() => buttonPressed(item)}
                  >
                    {/* <CurrencyButton name={item.name} flag={item.flag} /> */}
                    <CurrencyButton {...item} />
                  </Pressable>
                 )}
               />
            </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#515151',
    borderWidth: 3,
    borderColor: 'green',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'red',

  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

