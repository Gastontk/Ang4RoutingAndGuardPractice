import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
//removed AccountsService from providers below. providing it instead in app.module. This allows a single instance for all children to use. Note it still must be declared in the constructor
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


//added constructor
  constructor(private loggingService:LoggingService, private accountsService:AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
