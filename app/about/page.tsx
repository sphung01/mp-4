"use client"
import Transition from "@/components/Transition"

export default function About() {
    return(
        <div className="min-h-screen w-full bg-gray-800 block justify-around items-center text-center text-white">
            <Transition>
                <h1 className="text-5xl p-5 font-bold">About Gametour</h1>
                <p className="text-4xl mx-20">
                    Hello and welcome to GameTour! Here on this website, you can check out the games that
                    you want to look into! Just simply enter the name of the game. 
                    You get to see the expected playtime to beat the game and the time the game was
                    released. You can also check the rating of the game to see if it suits your taste! Have fun searching!
                </p>
            </Transition>
        </div>

    )
}