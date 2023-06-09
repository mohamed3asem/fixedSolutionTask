import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {ListView} from '~/views/ListView';
import {ListItemDetails} from '~/views/ListItemDetailsView';
import {ListItemType} from '~/models/ListItem';

export type RootStackPatamList = {
  ListItemDetails: Pick<ListItemType, 'key'>;
  List: undefined;
};

const Stack = createStackNavigator<RootStackPatamList>();

export interface PageProps<T extends keyof RootStackPatamList> {
  navigation: StackNavigationProp<RootStackPatamList, T>;
  route: RouteProp<RootStackPatamList, T>;
}

export const LisStack = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ListView} />
      <Stack.Screen name="ListItemDetails" component={ListItemDetails} />
    </Stack.Navigator>
  );
};
