import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, Animated, StyleProp, ViewStyle, TouchableWithoutFeedbackProps } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { usePlayer } from '../../contexts/players';

interface Props {
  style: StyleProp<ViewStyle>;
  onSelectedPlayer: () => void;
  onDelete: () => void;
  handleDrawn: () => void;
}

export default function FabButton({ style, onSelectedPlayer, handleDrawn, onDelete }:Props) {
  const [open, setOpen] = useState(false)
  const [animation] = useState(new Animated.Value(0))
  const { maxPlayers, listPlayers, drawn } = usePlayer();

  const toggleMenu = () => {
    var toValue = open ? 0 : 1
  Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      useNativeDriver: true,
    }).start()

    setOpen(!open)
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }

  const ballStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50]
        })
      }
    ]
  }

  const trashStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -150]
        })
      }
    ]
  }

  const teamStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100]
        })
      }
    ]
  }

  return (
    <View style={[styles.container, style]} >
      {(Number(maxPlayers.toFixed(0)) !== listPlayers.length) &&
        <TouchableWithoutFeedback onPress={() => onSelectedPlayer()}>
          <Animated.View style={[styles.button, styles.subMenu, teamStyle]}>
            <Ionicons
              name="md-shirt" 
              size={18} 
              color="#FFF"
            />
          </Animated.View>        
        </TouchableWithoutFeedback>
      }
      {drawn && 
        <TouchableWithoutFeedback onPress={onDelete}>
          <Animated.View style={[styles.button, styles.subMenu, trashStyle]}>
            <FontAwesome5
              name="trash" 
              size={20} 
              color="#FFF"
            />
          </Animated.View>        
        </TouchableWithoutFeedback>
      }
      {(Number(maxPlayers.toFixed(0)) === listPlayers.length) &&
        <TouchableWithoutFeedback onPress={handleDrawn}>
          <Animated.View style={[styles.button, styles.subMenu, ballStyle]}>
            <Ionicons
              name="football-outline" 
              size={25} 
              color="#FFF"
            />
          </Animated.View>        
        </TouchableWithoutFeedback>
      }

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <MaterialCommunityIcons
            name="plus" 
            size={25} 
            color="#FFF"
          />
        </Animated.View>        
      </TouchableWithoutFeedback>
      
    </View>
  );
}