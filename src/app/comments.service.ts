import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface CommentI {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private canActivate: boolean = false;
  normalSubject = new Subject<string>();
  behSubject = new BehaviorSubject('Initial value');

  constructor(private http: HttpClient) { }

  public getAllComments(): Observable<CommentI[]> {
    return this.http.get<CommentI[]>('https://jsonplaceholder.typicode.com/comments')
  }

  public getComment(id: string): Observable<CommentI> {
    return this.http.get<CommentI>('https://jsonplaceholder.typicode.com/comments/'+id)
  }

  public getCommentErr(): Observable<CommentI[]> {
    return this.http.get<CommentI[]>('https://jsonplaceholder.typicode.com/commentssss/1')
  }

  get isActive() {
    return this.canActivate;
  }

  public flipActivate() {
    this.canActivate = !this.canActivate;
  }
}
