import {Component, OnDestroy, OnInit} from '@angular/core';
import {find, from, map, Observable, Subscription, tap} from "rxjs";
import {CommentI, CommentsService} from "../comments.service";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnDestroy, OnInit {
  public comments: CommentI[] | undefined;
  private mySubscription: Subscription;
  public $comments: Observable<CommentI[]>;
  public error: string | undefined;
  public numbers = [1, 2, 3, 4, 5];

  constructor(private commentsService: CommentsService) {
    this.mySubscription = this.commentsService.getAllComments()
      .pipe(map(items => items.slice(0, 10)),
        tap(items => console.log('tap items:', items)))
      .subscribe(comments => {
        this.comments = comments;
        this.commentsService.behSubject.next(this.comments[0].body);
        this.commentsService.normalSubject.next(this.comments[0].body);
      });
    this.$comments = this.commentsService.getAllComments()
      .pipe(map(items => items.slice(10, 20)));

    this.commentsService.getComment().subscribe({
      next: value => console.log('value: ', value),
      error: error => {
        console.log('error: ', error);
        this.error = error.message;
      },
      complete: () => console.log('Complete')
    })
  }

  ngOnInit() {
    const $numbers = from(this.numbers);

    $numbers.pipe(find(num => num > 3)).subscribe({
      next: value => console.log('Found value:', value)
    });

    this.commentsService.behSubject.subscribe({
      next: item => console.log('Beh item:', item)
    });
    this.commentsService.normalSubject.subscribe({
      next: item => console.log('Normal item:', item)
    });
    this.commentsService.behSubject.next('beh new value');
    this.commentsService.normalSubject.next('normal new value');
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
