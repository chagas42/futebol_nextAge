import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, Animated, StyleProp, ViewStyle, TouchableWithoutFeedbackProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

interface Props {
  style: StyleProp<ViewStyle>;
  onSelectedPlayer: () => void;
  onHandleTeams: (value:boolean) => void;
}

export default function FabButton({ style, onHandleTeams, onSelectedPlayer}:Props) {
  const [open, setOpen] = useState(false)
  const [animation] = useState(new Animated.Value(0))

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

  const homeStyle = {
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

  const heartStyle = {
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

      <TouchableWithoutFeedback onPress={() => onSelectedPlayer()}>
        <Animated.View style={[styles.button, styles.subMenu, heartStyle]}>
          <Ionicons
            name="md-shirt" 
            size={18} 
            color="#FFF"
          />
        </Animated.View>        
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => console.log('teste')}>
        <Animated.View style={[styles.button, styles.subMenu, homeStyle]}>
          <Ionicons
            name="football-outline" 
            size={25} 
            color="#FFF"
          />
        </Animated.View>        
      </TouchableWithoutFeedback>

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