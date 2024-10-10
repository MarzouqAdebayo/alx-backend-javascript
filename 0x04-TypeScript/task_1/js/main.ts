interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

interface Director extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassInterfaceConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
