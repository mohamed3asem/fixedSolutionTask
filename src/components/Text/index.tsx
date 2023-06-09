import React from 'react';
import {Text as RawText} from 'react-native';

export const Text = ({children}: {children: unknown}) => {
  return typeof children === 'string' ? <RawText>{children}</RawText> : <></>;
};
