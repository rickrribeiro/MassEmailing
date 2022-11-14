import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { City } from "../screens/City";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
                />
                <Screen
                name="city"
                component={City}/>
        </Navigator>
    )
}