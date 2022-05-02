import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';



@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap; 

  constructor(private faceSnapService : FaceSnapsService,
              private route: ActivatedRoute){}

  buttonText!: string;

  ngOnInit(){
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getSnapById(snapId)
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
