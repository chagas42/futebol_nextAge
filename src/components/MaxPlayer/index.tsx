import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { usePlayer } from '../../contexts/players';

import { styles } from './styles';

export const MaxPlayer = () => {

  const { setMaxPlayers, maxPlayers } = usePlayer();
  const [ value, setValue ] = useState(1);

  function handleActionButton() {
     setMaxPlayers(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Max Of Players</Text>

      <View style={styles.sliderArea}>
        <Text style={styles.value}>{value.toFixed(0)}</Text>
        <Slider
          style={{ width: 200, height: 30, marginHorizontal: 15}}
          minimumValue={1}
          maximumValue={22}
          value={value}
          onValueChange={(v) => setValue(v)}
          minimumTrackTintColor="#E95958"
          maximumTrackTintColor="#fff"
        />
        <Text style={styles.value}>22</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => handleActionButton()}
      >
        <Text style={styles.titleButton}>Go to add</Text>
        <AntDesign
          size={20}
          name="arrowright"
          color="#fff"
        />
      </TouchableOpacity>
      
    </View>
  );
}