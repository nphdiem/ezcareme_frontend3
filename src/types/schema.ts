export interface Expert {
  id: string;
  name: string;
  email: string;
  location: string;
  callPrice: number;
  qaPrice: number;
  job: string;
  expertises: string[];
  rating: number;
  accountType: string;
  avatar?: string;
  isFavourite?: boolean | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  location?: string;
  avatar?: string;
  job?: string;
}

export interface HttpLoginRequest {
  email: string;
  password: string;
}
