import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* ActivityIndicator - индикатор загрузки */}
          <ActivityIndicator size="large"/> 
          <Text style={{marginTop: 10, fontSize: 18}}>Loading</Text>
        </View>
      )
}

export default Loading;