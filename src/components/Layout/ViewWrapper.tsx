import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
