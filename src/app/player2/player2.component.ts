import { Component } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component {
  constructor(private playerService:PlayerService){}
  player1:IPlayer=this.playerService.getPlayer1();
  player2:IPlayer=this.playerService.getPlayer2();
  // isValid: string = this.player2.isActive ? "enabled" : "disabled";

  onClick(){
    this.player2=this.playerService.onClickPs(this.player2);
    this.player2.isActive = false;
    console.log(this.player2.isActive)
  }
}
