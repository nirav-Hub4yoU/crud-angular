import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  constructor(private route: Router) {}
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  countdown: number = 3;
  countdownMapping: any = {
    '=1': '# second',
    other: '# seconds',
  };
  ngOnInit(): void {
    timer(1000, 1000)
      .pipe(
        finalize(() => {
          this.route.navigate(['users']);
        }),
        takeWhile(() => this.countdown > 0),
        takeUntil(this._unsubscribeAll),
        tap(() => this.countdown--)
      )
      .subscribe();
  }
}
