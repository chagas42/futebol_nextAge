import React, { useRef, useState } from 'react';
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
import { Players, usePlayer } from '../../contexts/players';
import { Player } from '../../components/Player';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Loading';

export const Home = () => {

  const modalizeRef = useRef<Modalize>(null);
  
  const [teamA, setTeamA] = useState<Players[]>([]);
  const [teamB, setTeamB] = useState<Players[]>([]);

  const [loading, SetLoading] = useState(false);
  const { 
    maxPlayers, 
    listPlayers, 
    setListPlayers,
    drawn, 
    setMaxPlayers,
    setDrawn,
   } = usePlayer();

  function onOpen() {
    modalizeRef.current?.open();
  }

  function onClose() {
    modalizeRef.current?.close();
  }


  function embaralhar(array:Players[]) {
    for (var i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleDrawn () {
    SetLoading(true);
    const result = embaralhar(listPlayers);

    let a: Players[] = result.splice(0, result.length / 2);
    let b: Players[] = result.splice(result.length / 2);

    setTeamA(a);
    setTeamB(b);
    setDrawn(true);

    setInterval(() => {
      SetLoading(false);
    }, 3000)
  };

function onDelete() {
  setListPlayers([]);
  setDrawn(false);
  setMaxPlayers(1);
};

  return (
    <View style={styles.container}>
      {loading ? 
        <Load/>
      :
        <>
          <Header/>

          <View style={styles.content}>
            
            {!drawn ?
              <>
              {listPlayers.length > 0 &&
                <View style={styles.listTitleArea}>
                  <Text style={styles.listTitle}>Unteamed Players</Text>
                </View>
              }

              <FlatList
                // contentContainerStyle={{ flex:1, marginTop: listPlayers.length === 0 ? 0 : 20}}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 20 }}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                data={listPlayers}
                renderItem={({item}) => (
                  <Player name={item.name}/>
                )}
                style={{width: '100%', paddingHorizontal: 20 }}
                ListEmptyComponent={() => (<EmptyList/>)}
              />
            </>
            :
            <>
              <View style={styles.listTitleArea}>
                <Text style={styles.listTitle}>Team A</Text>
              </View>
            

            <FlatList
              // contentContainerStyle={{ flex:1, marginTop: listPlayers.length === 0 ? 0 : 20}}
              contentContainerStyle={{ paddingBottom: 68, paddingTop: 20 }}
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              data={teamA}
              renderItem={({item}) => (
                <Player name={item.name}/>
              )}
              style={{width: '100%', paddingHorizontal: 20 }}        
            />


            
            <View style={styles.listTitleArea}>
              <Text style={styles.listTitle}>Team B</Text>
            </View>
            

            <FlatList
              // contentContainerStyle={{ flex:1, marginTop: listPlayers.length === 0 ? 0 : 20}}
              contentContainerStyle={{ paddingBottom: 68, paddingTop: 20 }}
              keyExtractor={item => String(item.id)}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              data={teamB}
              renderItem={({item}) => (
                <Player name={item.name}/>
              )}
              style={{width: '100%', paddingHorizontal: 20 }}
              
            />
          </>
            }

          </View>

          <FabButton
            onDelete={onDelete}
            style={{ bottom: 120, right: 70 }}
            handleDrawn={handleDrawn}        
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
        </>
      }
    </View>
  );
}