import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 78,
            location: "Paris",
            snapped: false
          },{
            title : 'Alakazam',
            description: 'Il fait flippé avec ses cuillères',
            imageUrl: 'https://www.pokepedia.fr/images/thumb/6/68/Alakazam-RFVF.png/250px-Alakazam-RFVF.png',
            createdDate: new Date(),
            snaps: 165,
            location: "Vilili",
            snapped: false
          },{ 
            title: 'Ronflex',
            description: 'Il adore manger',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 230,
            snapped: false
          }
    ]
}