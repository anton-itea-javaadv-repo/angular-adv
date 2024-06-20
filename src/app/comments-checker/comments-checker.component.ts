import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-comments-checker',
  standalone: true,
  imports: [],
  templateUrl: './comments-checker.component.html',
  styleUrl: './comments-checker.component.css'
})
export class CommentsCheckerComponent implements OnInit {
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.behSubject
      .subscribe(item => console.log('comments-checker beh item:', item));
    this.commentsService.normalSubject
      .subscribe(item => console.log('comments-checker normal item:', item));
  }
}
