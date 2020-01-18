import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title:'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7d04e7',
            },
        },
    })
);

export default Routes;