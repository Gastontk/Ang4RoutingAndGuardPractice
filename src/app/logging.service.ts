//doesn't require the @ markup


export class  LoggingService {
	logStatusChange(status:string){
		console.log('A server status changes. The new status is:', status);
	}

}