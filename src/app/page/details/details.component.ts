import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/components/DataSharingService';

interface Post {
  title: string;
  id: string;
  photo: string;
  article: string;
  date: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() dataFromParent: Post[] = [];

  constructor(private dataSharingService: DataSharingService){}
  ngOnInit(): void {
    this.dataFromParent = this.dataSharingService.getSharedArray();
  }

}
