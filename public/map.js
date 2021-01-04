const map = {
        tsize: 64,
        cols: 8,
        rows: 8,
        tiles: [
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
        ],
        //Pieces: [

            // Notação Forsyth
            //com 'R' para Rei, 'D' para Dama, 'B' para Bispo, 'C' para Cavalo, 'T' para Torre e 'P' para peão
            // com 'W' para White, 'B' para Black

         //   "BT","BC","BB","BD","BR","BB","BC","BT",
           // "BP","BP","BP","BP","BP","BP","BP","BP",
           // "","","","","","","","",
          //  "","","","","","","","",
          //  "","","","","","","","",
          //  "","","","","","","","",
          //  "WP","WP","WP","WP","WP","WP","WP","WP",
          //  "WT","WC","WB","WD","WR","WB","WC","WT",
        //],
        Pieces: [

            // Notação Forsyth
            //com 'R' para Rei, 'D' para Dama, 'B' para Bispo, 'C' para Cavalo, 'T' para Torre e 'P' para peão
            // com 'W' para White, 'B' para Black

            "","","","","WP","","","WP",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","WP",
            "","","","","WT","","","",
            "","","WC","","","","","WT",
            "","","","","","","","",
            "","","","","WP","","","WT",
        ],
        Players: [
            "P2","","","","","","","",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","",
            "","","","","","","","P1",
        ],
        getTile: function(col, row) {
            return this.tiles[row * map.cols + col]
        },
        getPlayer: function(col, row) {
            return this.Players[row * map.cols + col]
        },
        getPlayerPosition: function(player) {
            for (let i = 0; i <= 63; i++){
                if(this.Players[i] == player){
                    return i;
                }
            }
        },
        getPiece: function(col, row) {
            return this.Pieces[row * map.cols + col]
        },
        getPieceInPosition: function(position) {
            return this.Pieces[position]
        },
        movePlayer: function(player, keyPressed) {
            let playerPos = this.getPlayerPosition(player);
            if (keyPressed == "ArrowUp") {
                if((playerPos - this.cols ) < 0){
                    this.Players[playerPos] = ""
                    this.Players[playerPos+56] = player
                }else{
                    this.Players[playerPos] = ""
                    this.Players[playerPos-this.cols] = player
                }
            }
            if (keyPressed == "ArrowLeft") {
                if(playerPos == 0){
                    this.Players[playerPos] = ""
                    this.Players[63] = player
                }else{
                    this.Players[playerPos] = ""
                    this.Players[playerPos-1] = player
                }
            }
            if (keyPressed == "ArrowRight") {
                if(playerPos == 63){
                    this.Players[playerPos] = ""
                    this.Players[0] = player
                }else{
                    this.Players[playerPos] = ""
                    this.Players[playerPos+1] = player
                }
            }
            if (keyPressed == "ArrowDown") {
                    if((playerPos + this.cols ) > 63){
                    this.Players[playerPos] = ""
                    this.Players[playerPos-56] = player
                }else{
                    this.Players[playerPos] = ""
                    this.Players[playerPos+this.cols] = player
                }
            }
            return this.Players[playerPos]
        },
        movePiece: function(inPos, toPos){
            if(this.getPieceInPosition(toPos) != "") return false
            this.Pieces[toPos] = this.Pieces[inPos]
            this.Pieces[inPos] = ""
        }
}   

export default map