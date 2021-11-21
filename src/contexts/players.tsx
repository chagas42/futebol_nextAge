import React, 
{ 
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

export type Players = {
  name: string;
  id: number;
};

type PlayersContextData = {
  maxPlayers: number;
  setMaxPlayers: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  listPlayers: Array<Players>;
  setListPlayers: React.Dispatch<React.SetStateAction<Array<Players>>>;
}

type PlayerProviderProps = {
  children: ReactNode;
}



export const PlayersContext = createContext({} as PlayersContextData);

function PlayersProvider({ children }: PlayerProviderProps) {
  const [loading, setLoading] = useState(false);
  const [maxPlayers, setMaxPlayers] = useState(1);
  const [listPlayers, setListPlayers] = useState<Array<Players>>([]);

  return (
    <PlayersContext.Provider value={{
      maxPlayers,
      setMaxPlayers,
      loading,
      listPlayers,
      setListPlayers
    }}>
      { children }
    </PlayersContext.Provider>
  )
}

//nosso hoock customizado
function usePlayer() {
  const context = useContext(PlayersContext);

  return context;
}

export {
  PlayersProvider,
  usePlayer
}