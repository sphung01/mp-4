"use server"
import { GameProps } from "@/types/gameInfo";

export default async function getGameData(gameName: string): Promise<GameProps | undefined> {
    try{
        if(gameName === ""){
            return undefined;
        }
        const apiKey = process.env.RAWG_API_KEY;
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}`);
        const data = await response.json();
        
        console.log(data.results[0]);
        return data.results[0];
    } catch (error) {
        console.error("Failed to fetch the data");
        return undefined;
    }
}
