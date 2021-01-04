movePlayer: function(player, keyPressed) {
            
            for (let i = 0; i <= 63; i++){
                
                if(this.Players[i] == player){
                    if (keyPressed == "ArrowUp") {
                        if((i - this.cols ) < 0){
                            this.Players[i] = ""
                            this.Players[i+56] = player
                        }else{
                            this.Players[i] = ""
                            this.Players[i-this.cols] = player
                        }
                    }
                    if (keyPressed == "ArrowLeft") {
                        if(i == 0){
                            this.Players[i] = ""
                            this.Players[63] = player
                        }else{
                            this.Players[i] = ""
                            this.Players[i-1] = player
                        }
                    }
                    if (keyPressed == "ArrowRight") {
                        if(i == 63){
                            this.Players[i] = ""
                            this.Players[0] = player
                        }else{
                            this.Players[i] = ""
                            this.Players[i+1] = player
                        }
                    }
                    if (keyPressed == "ArrowDown") {
                         if((i + this.cols ) > 63){
                            this.Players[i] = ""
                            this.Players[i-56] = player
                        }else{
                            this.Players[i] = ""
                            this.Players[i+this.cols] = player
                        }
                    }
                    return this.Players[i]
                }
            }
        },