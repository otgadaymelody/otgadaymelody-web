export interface FormData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  comment: string;
  email: string;
}

export interface ErrorData {
  teamName: boolean;
  numPeople: boolean;
  telNumber: boolean;
  socialMediaPage: boolean;
  comment: boolean;
  email: boolean;
}

export interface ErrorMessagesData {
  teamName: string;
  numPeople: string;
  telNumber: string;
  socialMediaPage: string;
  comment: string;
  email: string;
}
