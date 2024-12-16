export interface User {
  id: string;
  email: string;
  role: 'patient' | 'provider' | 'admin';
  profile: {
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    phone?: string;
    address?: Address;
  };
  metadata: {
    createdAt: string;
    lastLogin: string;
    mfaEnabled: boolean;
  };
}

export interface Patient extends User {
  medicalHistory: {
    conditions: string[];
    medications: string[];
    allergies: string[];
    surgeries: string[];
  };
  insurance: {
    provider: string;
    policyNumber: string;
    groupNumber: string;
  };
  appointments: Appointment[];
}

export interface Provider extends User {
  specialty: string;
  license: {
    number: string;
    state: string;
    expirationDate: string;
  };
  availability: {
    schedule: Schedule[];
    exceptions: DateRange[];
  };
  patients: string[]; // Patient IDs
}

export interface Appointment {
  id: string;
  patientId: string;
  providerId: string;
  datetime: string;
  duration: number;
  type: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Schedule {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

interface DateRange {
  startDate: string;
  endDate: string;
  reason?: string;
}