import { StatusBar } from 'expo-status-bar';
import { View, } from 'react-native';
import { Navigation } from './screens/Navigation';

export default function App() {
  return (
      <Navigation/>
    // <View style={{marginTop: 40}}>
    //   <StatusBar style="auto" />
    // </View>
  );
}