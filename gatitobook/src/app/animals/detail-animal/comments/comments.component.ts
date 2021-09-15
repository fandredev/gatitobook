import { switchMap, tap } from 'rxjs/operators';
import { CommentsService } from './comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() id!: number
  comments$!: Observable<Comments>
  commentForm!: FormGroup

  constructor(
    private readonly commentsService: CommentsService,
    private readonly formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.findComments(this.id)
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }

  saveComment() : void{
    const comment = this.commentForm.get('comment')?.value ?? ''
    this.comments$ = this.commentsService.includeComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.findComments(this.id)),
      tap(() => this.commentForm.reset())
    )
  }
}
