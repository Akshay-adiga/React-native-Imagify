// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Welcome from '../screens/welcome';
// import Details from '../screens/details';
// import Description from '../screens/desc'
// import { Platform } from 'react-native';

// const AppNavigation = createStackNavigator({
//     Welcome,
//     Details,
//     Description
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? 'grey' : ''
//         },
//         headerTintColor: Platform.OS === 'android' ? 'white' : 'grey',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }
//     }
// })

// export default createAppContainer(AppNavigation)


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/welcome';
import Details from '../screens/details';
import Description from '../screens/desc'
import { colors } from '../utils/colors';

const Stack = createStackNavigator()
const defaultStyle = {
    headerStyle: {
        backgroundColor: colors.secondary
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        title: 'Welcome',
                        ...defaultStyle
                    }
                    }
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={(props: any) => ({
                        title: props.route.params.HeaderText,
                        ...defaultStyle
                    })}
                />
                <Stack.Screen
                    name="Description"
                    component={Description}
                    options={{
                        title: 'Description',
                        ...defaultStyle
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation