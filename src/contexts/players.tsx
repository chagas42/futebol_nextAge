import React, {createContext, ReactNode, useContext, useState} from 'react';

export type Players = {
  name: string;
  id: number;
};

type PlayersContextData = {
  maxPlayers: number;
  drawn: boolean;
  setDrawn: React.Dispatch<React.SetStateAction<boolean>>,
  setMaxPlayers: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  listPlayers: Array<Players>;
  setListPlayers: React.Dispatch<React.SetStateAction<Array<Players>>>;
  teamA: Array<Players>;
  setTeamA: React.Dispatch<React.SetStateAction<Array<Players>>>;
  teamB: Array<Players>;
  setTeamB: React.Dispatch<React.SetStateAction<Array<Players>>>;
}

type PlayerProviderProps = {
  children: ReactNode;
}

export const PlayersContext = createContext({} as PlayersContextData);

function PlayersProvider({ children }: PlayerProviderProps) {
  const [loading, setLoading] = useState(false);
  const [maxPlayers, setMaxPlayers] = useState(1);
  const [listPlayers, setListPlayers] = useState<Array<Players>>([]);
  const [teamA, setTeamA] = useState<Array<Players>>([]);
  const [teamB, setTeamB] = useState<Array<Players>>([]);
  const [drawn, setDrawn] = useState<boolean>(false);

  return (
    <PlayersContext.Provider value={{
      maxPlayers,
      setMaxPlayers,
      loading,
      listPlayers,
      setListPlayers,
      teamA,
      setTeamA,
      teamB,
      setTeamB,
      drawn,
      setDrawn,
    }}>
      { children }
    </PlayersContext.Provider>
  )
}

//nosso hoock customizado
function usePlayer() {
  return useContext(PlayersContext);
}

export {
  PlayersProvider,
  usePlayer
}