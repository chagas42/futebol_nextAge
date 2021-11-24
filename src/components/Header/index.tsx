import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  BackHandler,
  TouchableWithoutFeedback
} from 'react-native';
import { usePlayer } from '../../contexts/players';

import { styles } from './styles';

export const Header = () => {

  const { listPlayers, maxPlayers, drawn } = usePlayer();

  function onClose() {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.header}>
        <TouchableWithoutFeedback style={styles.iconArea} onPress={onClose} >
          <MaterialCommunityIcons
            name="chevron-left"
            size={38}
            color="#fff"
          />   
        </TouchableWithoutFeedback>
        <View style={styles.headerContent}>
          {!drawn ? 
            <>
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
            </>
          :
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Text style={[styles.playersNumber, { fontSize: 27 }]}>Drawn Players!</Text>
            </View>
          }
          </View>
      </View>
  );
}