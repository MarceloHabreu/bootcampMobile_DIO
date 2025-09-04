import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';
import { useState } from 'react';

export default function App() {
   const [isActive, setIsActive] = useState(false);

   function handleSymbol() {
      setIsActive((oldValue: boolean) => {
         return !oldValue;
      });
   }
   return (
      <View style={isActive ? styles.containerOn : styles.containerOff}>
         <TouchableOpacity onPress={handleSymbol}>
            <Image source={isActive ? symbolOn : symbolOff} />{' '}
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   containerOn: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerOff: {
      flex: 1, // ocupa a tela inteira
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
