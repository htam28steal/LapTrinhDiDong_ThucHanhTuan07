import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_Fetch from './fetchapi'
import API_Screen_01 from './API_Screen_01';
import API_Screen_02 from './API_SCreen_02'
import API_Screen_03 from './API_Screen_03'
const Stack = createStackNavigator();
const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="API_Screen_01">
        <Stack.Screen name="Screen_Fetch" component={Screen_Fetch} />
        <Stack.Screen name="API_Screen_01" component={API_Screen_01} />
        <Stack.Screen name="API_Screen_02" component={API_Screen_02} />
         <Stack.Screen name="API_Screen_03" component={API_Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;

