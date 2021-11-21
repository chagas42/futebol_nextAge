import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Players } from '../../contexts/players';

import { styles } from './styles';

type Props = {
  name: string;
}

export const Player = ({ name }: Props) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <FontAwesome
        name="user-circle"
        size={20}
        color="#0F3D46"
      />
      <Text style={styles.name}>{name}</Text>
      <Fontisto
        name="more-v-a"
        size={20}
        color="#0F3D46"
      />
    </TouchableOpacity>
  );
}