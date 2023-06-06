import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from 'src/app/data/mockData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  imageCover:string = ""
  contentTitle:string = ""
  contentText:string = ""
  private id:string | null = "0"
  
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValueToComponents(this.id)
  }

  setValueToComponents(id:string | null){
    const result = mockData.filter(article => article.id.toString() == id)[0]
    
    this.contentTitle = result.title
    this.contentText = result.description
    this.imageCover = result.image
  }
}
