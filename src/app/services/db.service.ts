import { Injectable } from '@angular/core';
import { Post } from "../posts/post.model";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  postCollection: Post[] = [];
  constructor() { }

  addPost(post){
    this.postCollection.push(post);
  }

  getPosts(){
    return this.postCollection;
  }
}
