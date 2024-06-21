import {Routes} from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentsCheckerComponent} from "./comments-checker/comments-checker.component";
import {CommentsCheckerChild1Component} from "./comments-checker-child1/comments-checker-child1.component";
import {CommentsCheckerChild2Component} from "./comments-checker-child2/comments-checker-child2.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CommentViewComponent} from "./comment-view/comment-view.component";
import {ErrorPlaceComponent} from "./error-place/error-place.component";
import {activatorGuard} from "./activator.guard";

export const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentViewComponent},
  {path: 'comments-checker', component: CommentsCheckerComponent, children: [
      {path: 'comments-checker-child1', component: CommentsCheckerChild1Component},
      {path: 'comments-checker-child2', component: CommentsCheckerChild2Component, canActivate: [activatorGuard]},
    ]},
  {path: '**', component: ErrorPlaceComponent}
];
