export interface User {
  id: string;
  name: string;
  email: string;
  preferredLanguage: 'en' | 'hi' | 'pa';
}

export interface Vote {
  id: string;
  userId: string;
  electionId: string;
  timestamp: string;
  verified: boolean;
}

export interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  options: VoteOption[];
}

export interface VoteOption {
  id: string;
  text: string;
  description: string;
}