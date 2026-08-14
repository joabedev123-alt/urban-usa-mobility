export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cityCounty: string;
  state: string;
  worksWithDriverGroups: string;
  investor: string;
  experience?: string;
  agreeToContact: boolean;
}

export interface TerritoryState {
  id: string;
  name: string;
  code: string;
  status: 'Featured' | 'Available' | 'High Demand' | 'Under Review';
  licensedCount: number;
  availableCount: number;
  highlighted?: boolean;
  coords?: {
    left: string;
    top: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}
