import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  
  @Input()
  imageCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = ""


  constructor(){}

  ngOnInit(): void {
    
  }

}
