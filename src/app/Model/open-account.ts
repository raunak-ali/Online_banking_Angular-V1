import { PermanenetAddress } from "./permanenet-address";
import { ResidentialAddress } from "./residential-address";

export class OpenAccount {
  AccountUserId!: number;
  Title!: string;
  First_name!: string;
  Middle_name!: string;
  Last_name!: string;
  Father_name!: string;
  Mobilenumber!: string;
  Email_id!: string;
  Aadharnumber!: string;
  DataOfBirth!: string;
  AccountNumber!: string | null;
  PermanantAddress!: PermanenetAddress;
  ResidentialAddress!: ResidentialAddress;
  OccupationType!: string;
  SourceOfIncome!: string;
  GrossAnnualIncome!: string;
  OptedForDebitCard!: boolean;
  OptedForNetBanking!: boolean;
  ValidationDocs!: File | null;
  ValidationDocsData!: Uint8Array| null;
}
