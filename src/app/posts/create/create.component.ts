import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { DbService } from "../../services/db.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'k-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string;
  content: string;
  post:Post;

  constructor( public db: DbService) {
   }

  ngOnInit() {

  }

  newPost: string;

  onAddPost(form: NgForm){
    console.log(form);
    if (!form.valid) {
      return;
    }
    this.post = {
      title: form.value.title,
      content: form.value.content
    }
    this.db.addPost(this.post);
    form.resetForm();
    return false;
  }
}
