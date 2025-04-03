"use client" //We are responding to the server to update
import { GameProps } from "@/types/gameInfo";
import { useState } from "react";
import getGameData from "./actions";
import Transition from "@/components/Transition";

export default function Home() {

  // useState( ) Attributes
  const [name, setName] = useState("");
  const [game, setGame] = useState<GameProps | null>(null);

  // On the client side, we await data from the server...
  const searchGame = async () => {
    const data  = await getGameData(name);
    if(data != undefined) {
      setGame(data);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-800 flex justify-around items-center text-white">
      
      <div className="flex flex-col items-center justify-center text-center w-1/2 h-200 rounded-xl p-4 bg-blue-600">
        <Transition>
          <h1 className="font-bold text-lg">Enter a game that you want to look into</h1>
          <input 
            value={name}
            type="text"
            className="bg-white text-black text-3xl text-center m-4 rounded-lg"
            placeholder="e.g. Elden Ring"
            onChange={e => setName(e.target.value)} 
          />
          <button 
            onClick={searchGame} 
            className="h-12 px-6 m-2 w-50 text-lg text-indigo-100 transition-colors duration-150 
                      bg-indigo-700 rounded-lg hover:bg-indigo-800 
                      hover:cursor-pointer font-bold text-2xl">
            Submit
          </button>
        </Transition>
      </div>

      <div className="flex flex-col justify-center w-1/2 h-200 rounded-xl p-4 bg-green-600">
        <Transition>
          <div className="text-center m-4">
            {game?.background_image ?
            <img src={game?.background_image!} alt={`This is ${game.name}`}/> 
            : <p className="font-bold text-lg">PLEASE SUBMIT A GAME THAT EXIST</p>
            }
            <h2 className="font-bold text-lg">🎮 Game Title: {game?.name ? game!.name : "No Game Found"}</h2>
            <h2 className="font-bold text-lg">⏰ Expected Playtime: {game?.playtime ? game.playtime + " Hours" : "N/A"}</h2>
            <h2 className="font-bold text-lg">🚀 Release Date: {game?.released ? game.released : "N/A"}</h2>
            <h2 className="font-bold text-lg">⭐️ Rating: {game?.rating ? game.rating : "N/A"}</h2>
          </div>
        </Transition>
      </div>

    </div>
  );
}
