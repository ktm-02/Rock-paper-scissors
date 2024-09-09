import logo from 'RPS-Game/rps-game/Rock-paper-scissors/src/logo.svg';
import 'RPS-Game/rps-game/Rock-paper-scissors/src/App.css';

function App() {
    let player=confirm("Let's Play The Rock Paper Scissor Game (YES) OR (NO)?")
    if (player){
    let playerchoice=prompt("Welcome The Game!\tPlease Enter the word is Rock?,Paper?,Scissor?")
    if(playerchoice){
        let playerone=playerchoice.trim().toLowerCase()
        if(
            playerone==="rock"||
            playerone==="paper"||
            playerone==="scissor"
        ){
    let computerchoice=Math.floor(Math.random()*3+1)
    let computer=computerchoice===1 ? "rock":computerchoice===2 ? "paper" : "scissor"
    
    let result=playerone===computer ? `Player Choice=${playerone} \nComputer Choice=${computer} \nGame TIE` : 
    playerone==="rock" && computer==="paper" ? `Player Choice=${playerone}\nComputer Choice=${computer} \nCompuer Wins!!!`:
    playerone==="paper" && computer==="scissor" ? `Player Choice=${playerone}\nComputer Choice=${computer} \nCompuer Wins!!!`:
    playerone==="scissor" && computer==="rock" ? `Player Choice=${playerone}\nComputer Choice=${computer} \nCompuer Wins!!!`:
    `Player Choice=${playerone} \nComputer Choice=${computer} \nYou Are The Winnner!!!`
  
    alert(result)
    let playagain=confirm("Play Again?")
    playagain ? location.reload():alert("ok,Thanks for Playing!")
    }else{
        alert("You didn't Enter the Rock,Paper,Scissor")
    }
}else{
    alert("I guess You change the mind \t Maybe Next Time")
    location.reload()
}
}else{
    alert("ok , Maybe Next Time")
    location.reload();
}
}

export default App;
