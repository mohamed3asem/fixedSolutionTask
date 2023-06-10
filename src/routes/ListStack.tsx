import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {ListView} from '~/screens/ListView';
import {ListItemDetails} from '~/screens/ListItemDetailsView';
import {ListItemType} from '~/models/ListItem';

export type RootStackParamList = {
  ListItemDetails: Pick<ListItemType, 'key'>;
  List: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export interface ScreenProps<T extends keyof RootStackParamList> {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}

export const LisStack = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ListView} />
      <Stack.Screen name="ListItemDetails" component={ListItemDetails} />
    </Stack.Navigator>
  );
};
