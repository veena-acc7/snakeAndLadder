import { Injectable } from '@angular/core';
import { IBlock } from './block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  blocks : IBlock[] = [];
  constructor(){
    for(let i = 1 ; i <= 100 ; i++){
        let newBlock = {
          "value" : i,
          "isSnakeHead" : false,
          "snakeTail" : 0,
          "ladderHead" : 0,
          "isLadderTail" : false
        };
        this.blocks.push(newBlock);
      }
      console.log(this.blocks);
      // snake 1
      this.blocks[17].isSnakeHead = true;
      this.blocks[17].snakeTail = 7;
      // snake 2
      this.blocks[64].isSnakeHead = true;
      this.blocks[64].snakeTail = 60;
      // snake 3
      this.blocks[54].isSnakeHead = true;
      this.blocks[54].snakeTail = 34;
      // ladder 1
      this.blocks[4].isLadderTail = true;
      this.blocks[4].ladderHead = 14;
      // ladder 2
      this.blocks[28].isLadderTail = true;
      this.blocks[28].ladderHead = 84;
      // ladder 3
      this.blocks[80].isLadderTail = true;
      this.blocks[80].ladderHead = 99;
  }
  getBlocks(){
    return this.blocks;
  }
}
