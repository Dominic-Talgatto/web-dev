import { Component, OnInit } from '@angular/core';
import { photos } from '../photos';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Album } from '../albums';


@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos = [...photos];
  title: "";

  Ialbum: Album = {} as Album;


  constructor(private activateRoute: ActivatedRoute, private postService: PostService){
    this.title = '';
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.postService.getPost(+id).subscribe((Ialbum) => {
      this.Ialbum = Ialbum;
    });
  }
}
