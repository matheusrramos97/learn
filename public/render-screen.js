export default function renderScreen(document, map ,requestAnimationFrame){

    let screen = document.getElementById('screen')
    let screenInfo = document.getElementById('screen-info')

    screen.width = (map.cols) * map.tsize;
    screen.height = (map.rows) * map.tsize;
    screen.style="border:2px solid green;"


    let ctx = screen.getContext('2d')
    
    function DrawPieces(){
        for(let col = 0; col < map.cols; col++){
            for(let row = 0; row < map.rows; row++){
                ctx.fillStyle = "black"
                ctx.font = "15px Arial Courier";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(map.getPiece(col, row), col * map.tsize + 32, row * map.tsize + 32)
            }
        }
    }

    function DrawMap(){
        let i = 0;
        for(let row = 0; row < (map.rows); row++){
            for(let col = 0; col < (map.cols); col++){
                if (map.getTile(col, row) == 0) {
                    ctx.fillStyle = "green"
                }else if(map.getTile(col, row) == 1){ctx.fillStyle = "white"}
                else if(map.getTile(col, row) == 2){ctx.fillStyle = "black"}
                ctx.fillRect((col) * map.tsize, (row) * map.tsize, map.tsize, map.tsize);
                ctx.fillStyle = "red"
                ctx.font = "15px Arial Courier";
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(i++, col * map.tsize + 10, row * map.tsize + 10)
            }
        }
    }

    function DrawPlayers(){
        for(let row = 0; row < (map.rows); row++){
            for(let col = 0; col < (map.cols); col++){
                if (map.getPlayer(col, row) == "P1") {
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(col * map.tsize, row * map.tsize, map.tsize, map.tsize)

                    ctx.fillStyle = "red"
                    ctx.font = "15px Arial Courier";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillText("P1", col * map.tsize + 10, row * map.tsize + 42)

                }else if(map.getPlayer(col, row) == "P2"){
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(col * map.tsize, row * map.tsize, map.tsize, map.tsize)

                    ctx.fillStyle = "red"
                    ctx.font = "15px Arial Courier";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillText("P2", col * map.tsize + 42, row * map.tsize + 42)

                }
            }
        }
    }

    function DrawTime(){

        let time = new Date()
        ctx.fillStyle = "black"
        ctx.font = "15px Arial Courier";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("TIME: " + time.toLocaleString(), 10 * map.tsize + 32, 32);
    }

    function ClearScreen(){
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 8*64, 8*64);
    }
    function DrawAsist(){
        if (map.getPieceInPosition(map.getPlayerPosition("P1")) == "WP"){
            if (map.getPlayerPosition("P1") > 48 && map.getPlayerPosition("P1") < 55){
                ctx.strokeStyle = "red";
                ctx.strokeRect(AsistRow(0) , AsistCol(1), map.tsize, map.tsize)
                ctx.strokeRect(AsistRow(0) , AsistCol(2), map.tsize, map.tsize)

                ctx.fillStyle = "red"
                ctx.font = "15px Arial Courier";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(0) + 32, AsistCol(2) + 32)
                ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(0) + 32, AsistCol(1) + 32)
            }else {
                ctx.strokeStyle = "red";
                ctx.strokeRect(AsistRow(0) , AsistCol(1), map.tsize, map.tsize)
                ctx.fillStyle = "red"
                ctx.font = "15px Arial Courier";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(0) + 32, AsistCol(1) + 32)
            }
            // (54 / 8 arredonda para baixo) * 64
        }else if (map.getPieceInPosition(map.getPlayerPosition("P1")) == "WC"){
            ctx.strokeStyle = "red";
            ctx.strokeRect(AsistRow(-1) , AsistCol(2), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(1) , AsistCol(2), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(-1) , AsistCol(-2), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(1) , AsistCol(-2), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(2) , AsistCol(-1), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(-2) , AsistCol(1), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(2) , AsistCol(1), map.tsize, map.tsize)
            ctx.strokeRect(AsistRow(-2) , AsistCol(-1), map.tsize, map.tsize)
            // (54 / 8 arredonda para baixo) * 64

            ctx.fillStyle = "red"
            ctx.font = "15px Arial Courier";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(-1) + 32, AsistCol(2) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(+1) + 32, AsistCol(2) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(-1) + 32, AsistCol(-2) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(+1) + 32, AsistCol(-2) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(2) + 32, AsistCol(-1) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(-2) + 32, AsistCol(1) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(2) + 32, AsistCol(1) + 32)
            ctx.fillText(map.getPieceInPosition(map.getPlayerPosition("P1")), AsistRow(-2) + 32, AsistCol(-1) + 32)
        }else if(map.getPieceInPosition(map.getPlayerPosition("P1")) == "WT"){
            
            for(let F = 1; F <= 7; F++){
                let Piece = map.getPieceInPosition(map.getPlayerPosition("P1") - (map.rows * F))
                
                if (Piece == ""){
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(AsistRow(0) , AsistCol(F), map.tsize, map.tsize)
                }else {
                    console.log(Piece + " " + F + " " + map.rows * F)
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(AsistRow(0) , AsistCol(F), map.tsize, map.tsize)
                    F = 8
                }
            }
            for(let B = 1; B <= 7; B++){
                let Piece = map.getPieceInPosition(map.getPlayerPosition("P1") - (map.rows * B))
                
                if (Piece == ""){
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(AsistRow(0) , AsistCol(-B), map.tsize, map.tsize)
                }else {
                    console.log(Piece + " " + B + " " + map.rows * B)
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(AsistRow(0) , AsistCol(-B), map.tsize, map.tsize)
                    B = 8
                }
            }  
        }
        
        function AsistCol(x){
            let col = (Math.trunc(((map.getPlayerPosition("P1")-(map.cols * x))/map.cols)) * map.tsize)
            return col
        }
        function AsistRow(x){
            let row = (Math.round(map.getPlayerPosition("P1") % map.rows) + x) * map.tsize
            return row
        }

    }

    //map.movePiece({piece: 'WP', inRow: 7, inCol: 1, toRow: 6, toCol: 1});
    //map.movePiece({piece: 'WP', inRow: 7, inCol: 2, toRow: 6, toCol: 2});

    function Draw(){
        ClearScreen()
        DrawMap()
        DrawPieces()
        DrawPlayers()
        DrawAsist()

        requestAnimationFrame(() => {
        Draw()})
    }

    return {
        Draw
    }

}