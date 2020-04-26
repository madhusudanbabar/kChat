import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'k-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  posts:Post[];

  constructor(public db: DbService) {
    this.posts = this.db.getPosts();
  }

  ngOnInit() {

  }

  // posts = [
  //   { title: "first post", content: "this is the content"},
  //   { title: "second post", content: "this is the content"},
  //   { title: "third post", content: "this is the content"}
  // ]
}
