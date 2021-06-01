import { Component, OnInit } from '@angular/core';
import { ImgflipService } from '../imgflip.service';
import { imgflip } from '../imgflip';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent implements OnInit {

  // protected users$: Observable<imgflip[]>;

  users$: any[] = [];
  
  constructor(public imgflipservice: ImgflipService) { }

  ngOnInit()  {
    this.imgflipservice.getUsers().subscribe(res => {
      this.users$ = res.data.memes;
     
      console.log('Users -------------------', this.users$)
      
    });
  }

}
