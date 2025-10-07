interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

interface constructorInterface {
  firstName: string;
  lastName: string;
}
class StudentClass {
  constructor(con: constructorInterface) {
    this.firstName = con.firstName;
    this.lastName = con.lastName;
  }
  firstName: string;
  lastName: string;
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
