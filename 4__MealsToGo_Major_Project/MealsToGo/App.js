import { 
  Platform, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
  StatusBar 
} from 'react-native';

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === 'android';

export default function App() {
  
  return (

    <>

      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text> search </Text>
        </View>

        <View style={{ padding: 16, backgroundColor: "blue", flex: 1 }}>
            <Text> list </Text>
        </View>

      </SafeAreaView>

      <ExpoStatusBar style='auto'/>

    </>
    
    
  );
}

const styles = StyleSheet.create({
  
});
