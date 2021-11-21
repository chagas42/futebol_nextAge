import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { usePlayer } from '../../contexts/players';

import { styles } from './styles';

export const Header = () => {

  const { listPlayers, maxPlayers } = usePlayer();

  return (
    <View style={styles.header}>
        <View style={styles.iconArea}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={38}
            color="#fff"
          />   
        </View>
        <View style={styles.headerContent}>
          {(maxPlayers === 1) ?
            <Text style={styles.playersNumber}>{listPlayers.length}</Text>
            :
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Text style={styles.playersNumber}>{listPlayers.length}</Text>
              <Text style={styles.dash}>/</Text>
              <Text style={styles.max}>{maxPlayers.toFixed(0)}</Text>
            </View>
          }
            <Text style={styles.description}>Number of Players</Text>
          </View>
      </View>
  );
}