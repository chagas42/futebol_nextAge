import React, { useRef } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  
  Text,
  
  View
} from 'react-native';

import { Header } from '../../components/Header';
import FabButton from '../../components/FabButton';
import { EmptyList } from '../../components/EmptyList';

import { styles } from './styles';
import { Modalize } from 'react-native-modalize';
import { MaxPlayer } from '../../components/MaxPlayer';
import { AddPlayer } from '../../components/AddPlayer';
import { usePlayer } from '../../contexts/players';
import { Player } from '../../components/Player';

export const Home = () => {

  const modalizeRef = useRef<Modalize>(null);

  const { maxPlayers, listPlayers } = usePlayer();

  function onOpen() {
    modalizeRef.current?.open();
  };
  function onClose() {
    modalizeRef.current?.close();
  };

  return (
    <View style={styles.container}>
      
      <Header/>

      <View style={styles.content}>
        {listPlayers.length > 0 &&
          <View style={styles.listTitleArea}>
            <Text style={styles.listTitle}>Unteamed Players</Text>
          </View>
        }

        <FlatList
          contentContainerStyle={{ flex:1, marginTop: listPlayers.length === 0 ? 0 : 20, paddingBottom: 10}}
          keyExtractor={item => String(item.id)}
          data={listPlayers}
          renderItem={({item}) => (
            <Player name={item.name}/>
          )}
          style={{width: '100%', paddingHorizontal: 20 }}
          ListEmptyComponent={() => (<EmptyList/>)}
        />
      </View>

      <FabButton
        style={{ bottom: 120, right: 70 }}
        onHandleTeams={() => {}}
        onSelectedPlayer={onOpen}
      />
      
      <Modalize
        ref={modalizeRef}
        modalStyle={{
          borderTopLeftRadius: 38,
          borderTopRightRadius:38,
          backgroundColor: '#0F3D46',
        }}
        snapPoint={250}
        modalHeight={550}
        scrollViewProps={{ showsVerticalScrollIndicator: false}}
      >
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          { (maxPlayers === 1 )
          ?
            <MaxPlayer/>
          :
            <AddPlayer onClose={onClose}/>
          }
        </KeyboardAvoidingView>
      </Modalize>
    </View>
  );
}