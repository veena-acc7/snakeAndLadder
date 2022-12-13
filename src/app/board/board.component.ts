import { Component } from '@angular/core';
import { IBlock } from '../block';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  blocks : IBlock[] = this.blockService.getBlocks();
  bindex : number[] = [1,11,21,31,41,51,61,71,81,91];
  value:number=0;
  constructor(private blockService:BlockService){} 
  
}
