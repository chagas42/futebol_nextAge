import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { usePlayer } from '../../contexts/players';

import { styles } from './styles';

type Props = {
  onClose: () => void;
}

export const AddPlayer = ({ onClose }: Props) => {

  const { listPlayers, setListPlayers } = usePlayer();
  const [ name, setName ] = useState('');

  function handleActionButton() {
    const newValue = {
      name: name,
      id: listPlayers.length + 1,
    }
    console.log(newValue);
    setListPlayers(prevState => [...prevState, newValue]);
    onClose();
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Player Name"
        placeholderTextColor="#0F3D46"
      />


      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleActionButton}
      >
        <Text style={styles.titleButton}>Add Player</Text>
  
      </TouchableOpacity>
      
    </View>
  );
}