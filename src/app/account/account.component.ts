import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
//removed AccountsService from providers below. providing it instead in app.module. This allows a single instance for all children to use. Note it still must be declared in the constructor
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

//Inject LoggingService into constructor, giving access to the service loggingService
  constructor(private loggingService:LoggingService, private accountsService:AccountsService){}


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status);
  }
}
