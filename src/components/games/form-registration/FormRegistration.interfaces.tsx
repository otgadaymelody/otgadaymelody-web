export interface FormData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  comment: string;
}

export interface ErrorData {
  teamName: boolean;
  numPeople: boolean;
  telNumber: boolean;
  socialMediaPage: boolean;
  comment: boolean;
}

export interface ErrorMessagesData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  comment: string;
}
