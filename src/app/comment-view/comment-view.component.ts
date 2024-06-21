import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";
import {CommentI, CommentsService} from "../comments.service";

@Component({
  selector: 'app-comment-view',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './comment-view.component.html',
  styleUrl: './comment-view.component.css'
})
export class CommentViewComponent implements OnInit, OnDestroy {
  id: string | null | undefined;
  commentById: CommentI | undefined;
  mySub: Subscription | undefined;
  mySub2: Subscription | undefined;

  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.mySub = this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.mySub2 = this.commentsService.getComment(this.id).subscribe({
          next: value => {this.commentById = value},
          error: err => {console.log(err)}
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.mySub?.unsubscribe();
    this.mySub2?.unsubscribe();
  }
}
