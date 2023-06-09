import React, {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {Text} from 'react-native';

type ErrorBoundariesProps = {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
};

//NOTE: should be customized for accepting more props
export const ErrorBoundaries = ({children}: ErrorBoundariesProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={() => <Text>catched By Error Boundary</Text>}>
      {children}
    </ErrorBoundary>
  );
};
