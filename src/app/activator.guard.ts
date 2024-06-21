import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {CommentsService} from "./comments.service";

export const activatorGuard: CanActivateFn = (route, state) => {
  return inject(CommentsService).isActive;
};
