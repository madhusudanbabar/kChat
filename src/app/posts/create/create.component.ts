import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'k-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string;
  content: string;
  @Output() postCreated = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  newPost: string;

  onAddPost(postInput: HTMLTextAreaElement){
    const post = {
      title: this.title,
      content: this.content
    }
    this.postCreated.emit(post);
  }
}
