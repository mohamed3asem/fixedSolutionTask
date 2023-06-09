import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import type {RootStackPatamList} from '~/routes/ListStack';
import type {GestureResponderEvent} from 'react-native';
import {ListItemType} from '~/models/ListItem';

export const useListItemPress = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackPatamList, 'ListItemDetails'>>();

  const onListItemPress = (
    event: GestureResponderEvent,
    item: ListItemType,
  ) => {
    if (item.list) {
      navigation.push('ListItemDetails', {key: item.key});
    }
  };

  return {onListItemPress};
};
