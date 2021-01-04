import renderScreen from './render-screen.js'
import createMap from './map.js'

export default function createGame(document, requestAnimationFrame){

    const map = createMap;
    const rs = renderScreen(document, map, requestAnimationFrame)
    

    function start(){
        rs.Draw()
    }

    document.addEventListener('keydown', handleKeydown)

    const Player = "P1"

    function handleKeydown(event) {
        const keyPressed = event.key
        //console.log(keyPressed)
        map.movePlayer(Player, keyPressed)
        if(keyPressed == "Enter"){
            //console.log(map.getPieceInPosition(map.getPlayerPosition(Player)))
            map.movePiece(map.getPlayerPosition(Player), map.getPlayerPosition(Player) - map.rows)
        }
    }

    return {
        start
    }
    
}