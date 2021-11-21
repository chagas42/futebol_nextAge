import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';


type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({
  children, 
  closeModal,
  ...rest
}: Props){
  return (
    <Modal
      transparent
      style={{height: 200, backgroundColor: 'red', width: '100%',justifyContent: 'center',
      alignItems: 'center',}}
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        {children}
      </TouchableWithoutFeedback>
    </Modal>
  );
}