import { Component } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  
  constructor(private playerService:PlayerService){}
  player1:IPlayer=this.playerService.getPlayer1();
  player2:IPlayer=this.playerService.getPlayer2();
  // isValid: boolean = this.player1.isActive;
  onClick(){
    this.player1=this.playerService.onClickPs(this.player1);
    this.player1.isActive = false;
    //console.log(this.player1.isActive)
    // this.isValid=this.player1.isActive; 
    //this.player2.isActive=!this.player2.isActive;
   // console.log(this.player2.isActive)
    //var isValid=
    // var randNumber = Math.random() * 6+1;
    // var rand=Math.floor(randNumber);
    // this.player1.diceValue=rand;
    // this.player1.atValue=rand+this.player1.atValue;
    // console.log(Math.floor(randNumber));
  }
  
  
  

}
