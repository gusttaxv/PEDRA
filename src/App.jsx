import {useEffect, useState} from "react";

export default function App() {
    // 0 - Pedra
    // 1 - Papel
    // 2 - Tesoura

    const [userChoice, setUserChoice] = useState(0)
    const [computerChoice, setComputerChoice] = useState(0)
    const [result, setResult] = useState(null)

    function handleSelect(e) {
        setUserChoice(e.target.value)
        const randomChoice = Math.floor(Math.random() * 3)
        setComputerChoice(randomChoice)
    }

    useEffect(() => {
        if (userChoice == 0 && computerChoice == 2 ? 3 : userChoice > computerChoice) {
            setResult("Ganhou")
        } else if(userChoice == computerChoice) {
            setResult("Empatou")
        } else {
            setResult("Perdeu")
        }
    }, [userChoice, computerChoice]);

    return(
        <main className="min-h-screen bg-slate-500">
            <div>
                <select onChange={e => handleSelect(e)}>
                    <option disabled selected>FAÇA SUA ESCOLHA</option>
                    <option value={0}>Pedra</option>
                    <option value={1}>Papel</option>
                    <option value={2}>Tesoura</option>
                </select>
            </div>
            <div className="po">
            JOKENPÔ 
            </div>
            <div className="flex flex-col">
                
                <label>
                    <img src="../imgs/usuario.png" alt="" /> {userChoice}
                </label>
                <label>
                    <img src="../imgs/bot.png" alt="" />{computerChoice}
                </label>
                <h1 className="text-4xl">
                    Resultado: {result}
                </h1>
            </div>
        </main>
    )
}