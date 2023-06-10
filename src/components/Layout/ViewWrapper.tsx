import React, {ReactNode} from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import {styles} from './ViewWrapper.styles';

type ViewWrapperProps = {
  children: ReactNode;
  containerStyles?: ViewStyle;
};

export const ViewWrapper = ({
  children,
  containerStyles = {},
}: ViewWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, containerStyles]}>
      {children}
    </SafeAreaView>
  );
};
