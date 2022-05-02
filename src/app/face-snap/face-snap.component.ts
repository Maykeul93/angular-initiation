import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap; 

  constructor(private faceSnapService : FaceSnapsService){}

  buttonText!: string;

  ngOnInit(){
    this.buttonText = "Oh Snap!"
  }
  
  onAddSnap(){
    if(!this.faceSnap.snapped){
      this.buttonText = "Oops, un Snap";
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.faceSnap.snapped)
    }else if (this.faceSnap.snapped){
      this.buttonText = "Oh Snap!";
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.faceSnap.snapped)
    }
  }
}
