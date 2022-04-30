import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap; 

  buttonText!: string;

  ngOnInit(){
    this.buttonText = "Oh Snap!"
  }
  
  onAddSnap(){
    if(!this.faceSnap.snapped){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap";
      this.faceSnap.snapped = !this.faceSnap.snapped;
    }else if (this.faceSnap.snapped){
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
      this.faceSnap.snapped = !this.faceSnap.snapped;
    }
  }
}
