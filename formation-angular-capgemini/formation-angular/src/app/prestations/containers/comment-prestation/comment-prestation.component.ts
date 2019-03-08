import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-comment-prestation',
  templateUrl: './comment-prestation.component.html',
  styleUrls: ['./comment-prestation.component.scss']
})
export class CommentPrestationComponent implements OnInit {

  presta$: Subject<Prestation>;
  form: FormGroup;
  msg$: Subject<any> = new Subject();

  constructor(
    private ps: PrestationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.presta$ = this.ps.presta$;
    this.createForm();
    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((data) => {
        this.ps.presta$.value.comment = data.comment;
        this.ps.update(this.ps.presta$.value).then(() => {
          this.msg$.next('enregistré');
          setTimeout(() => {this.msg$.next(null); }, 1000);
        }).catch((e) => {

        });
    });
  }

  private createForm() {
    this.form = this.fb.group({
      comment: ''
    });
  }

}
