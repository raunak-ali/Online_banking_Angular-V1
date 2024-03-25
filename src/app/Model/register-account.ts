export class RegisterAccount {
UserId!:number|null;
IsAdmin! :boolean;
LoginPassword!:string;
TransactionPassword!:string;
isLocked!:boolean;
extra_info!:string|null;
isConfirmedUserProfile!:boolean;

AccountNumber!:string;
AccountUserId!:number
   // Foreign key references
AccountProfile!:null;
Account!:null;

}
