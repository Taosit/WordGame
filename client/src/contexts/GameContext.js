import React, { useState, useContext, createContext } from "react";

const GameContext = createContext();

const useGameContext = () => {
	return useContext(GameContext);
};

const GameContextProvider = ({ children }) => {
	const [players, setPlayers] = useState({});

	const [inGame, setInGame] = useState(false);
	const [roomId, setRoomId] = useState(null);
	const [round, setRound] = useState(0);
	const [describerIndex, setDescriberIndex] = useState(0);
	const [playerLeftNoteRoom, setPlayerLeftNoteRoom] = useState([]);

	return (
		<GameContext.Provider
			value={{
				players,
				setPlayers,
				round,
				setRound,
				describerIndex,
				setDescriberIndex,
				roomId,
				setRoomId,
				inGame,
				setInGame,
				playerLeftNoteRoom,
				setPlayerLeftNoteRoom,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export { useGameContext, GameContextProvider };
