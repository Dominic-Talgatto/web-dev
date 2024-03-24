import { Component, OnInit } from '@angular/core';
import { albums, Album } from '../albums';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import {RouterModule} from "@angular/router";
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgForOf, NgIf],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albumId= 0;
  Posts!: Album[];
  newPost: Album;
  id = 101;
  albums=[...albums]

  constructor(private postService: PostService) {
    this.newPost = {
      userId: 101,
      id: this.id,
      title: '',
    }
  }
  ngOnInit() {
    this.Posts = albums;
    this.postService.getPosts().subscribe((Posts) => {
      this.Posts = Posts;
    });
  }
  addPost() {
    this.postService.createPost(this.newPost).subscribe(
      (album) => {
        album.id = this.id;
        album.userId = 1;

        this.Posts.unshift(album);
        alert('Post created');
        this.newPost = {} as Album;
        this.id++;
      }
    );
  }
  deletePost(id: number) {
    this.Posts = this.Posts.filter((p) => p.id !== id);
    this.postService.deletePost(id).subscribe(() => {
      console.log('deleted');
    });
  }

}