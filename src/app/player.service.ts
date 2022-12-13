import { Injectable } from '@angular/core';
import { IBlock } from './block';
import { BlockService } from './block.service';
import { IPlayer } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  player1:IPlayer={"atValue":0,"isActive":true,"diceValue":0};
  player2:IPlayer={"atValue":0,"isActive":false,"diceValue":0};
  constructor(private blockService:BlockService) { }
  blocks:IBlock[]=this.blockService.getBlocks();
  getPlayer1(){
    return this.player1;
  }
  getPlayer2(){
    return this.player2;
  }
  onClickPs(player:IPlayer){
    var randNumber = Math.random() * 6+1;
    var rand=Math.floor(randNumber);
    player.diceValue=rand;
    player.atValue=rand+player.atValue;
    this.player1.isActive=!this.player1.isActive;
    this.player2.isActive=!this.player2.isActive;

    console.log(player.atValue)
    if (this.blocks[player.atValue].isSnakeHead){
      
      player.atValue=this.blocks[player.atValue].snakeTail;
      
    }

    if (this.blocks[player.atValue].isLadderTail){
      player.atValue=this.blocks[player.atValue].ladderHead;
    }
    if (player.atValue>100){
      player.atValue-=rand;
    }
    console.log(this.player1.isActive)
    console.log(this.player1.isActive);
    return player;
  }
  // setPlayer(_player :IPlayer){
  //   this._player
  // }
}
