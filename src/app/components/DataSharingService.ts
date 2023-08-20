import { Injectable } from '@angular/core';
import { Post } from './Post';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedArray: Post[] = [];

  setSharedArray(array: Post[]) {
    this.sharedArray = array;
  }

  getSharedArray(): Post[] {
    return this.sharedArray;
  }
}
