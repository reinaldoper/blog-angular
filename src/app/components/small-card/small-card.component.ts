import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';
import { Router } from '@angular/router';
import { DataSharingService } from '../DataSharingService';
import { Post } from '../Post';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(private route: Router, private dataSharingService: DataSharingService){}

  ngOnInit(){
    this.posts = data;
  }

  ButtonClick(id:string){
    const result = this.posts.filter(post => post.id === id);
    this.dataSharingService.setSharedArray(result);
    this.route.navigate(['/details'])
  }

}
