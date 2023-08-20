import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/components/DataSharingService';
import { Post } from 'src/app/components/Post';


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
