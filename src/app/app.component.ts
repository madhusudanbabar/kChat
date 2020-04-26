import { Component } from '@angular/core';
import { Post } from "./posts/post.model";
@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kChat';
  postsCollection: Post[] = [];

  onPostAdded( post ){
    this.postsCollection.push(post);
  }
}
