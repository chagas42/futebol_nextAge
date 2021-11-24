import React from 'react';

import {
  View,
  Text
} from 'react-native'; 

import Ilustration from '../../assets/ilustration.svg';

import { styles } from './styles';

export const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListDescription}>
        Your list players is empty
      </Text>
      <Ilustration
        width={235}
        height={235}
      />
    </View>
  );
}