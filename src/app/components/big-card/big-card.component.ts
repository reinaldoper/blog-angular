import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';
import { Post } from '../Post';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  posts: Post[] = [];
  constructor(){}

  ngOnInit(){
    this.posts = data;
  }
}
