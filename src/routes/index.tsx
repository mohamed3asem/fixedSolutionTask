import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {LisStack} from '~/routes/ListStack';

export const Router = () => {
  return (
    <NavigationContainer>
      <LisStack />
    </NavigationContainer>
  );
};
