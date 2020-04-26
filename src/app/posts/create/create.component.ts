import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'k-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newPost: string = "no content";

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = postInput.value;
  }
}
