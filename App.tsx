import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { MenuProvider } from 'react-native-popup-menu';

Icon.loadFont()
MaterialIcon.loadFont()
EntypoIcon.loadFont()

const App: React.FunctionComponent = () => {
    return (
      <MenuProvider>
        <Provider store={store}>
            <Router />
        </Provider>
      </MenuProvider>
    );
};

export default App;
