import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  protected queueData: Subject<string> = new Subject<string>()

  constructor() { }

  pushData(data: string): void {
    this.queueData.next(data)
  }

  onData(): Observable<string> {
    return this.queueData.asObservable()
  }
}
