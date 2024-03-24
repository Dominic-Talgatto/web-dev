import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Album } from '../albums';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, FormsModule],
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.css'
})
export class AlbumsDetailComponent implements OnInit{
  title: '';
  Ialbum: Album = {} as Album;
  isChange = false;

  constructor(private activateRoute: ActivatedRoute, private postService: PostService){
    this.title = '';
  }

  saveTitle() {
      if (this.title.length === 0) {
        alert("Title is empty")
      }
      else{
        if(this.Ialbum.title === this.title){
          alert("Write new title")
          this.title = '';
        }
        else{
          this.Ialbum.title = this.title;
          this.title = '';
        }
        
      }
  }

  isInput(){
    this.isChange = !this.isChange;
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.postService.getPost(+id).subscribe((Ialbum) => {
      this.Ialbum = Ialbum;
    });
  }

}
