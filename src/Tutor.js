export class Tutor {
  constructor(name, email, school, subjects) {
    this.name = name;
    this.email = email;
    this.school = school;

    this.subjects = subjects;
    this.sessions = [];
  }

  toObject() {
    return {
      email: this.email,
      school: this.school,
      subjects: this.subjects,
      sessions: this.sessions.map((session) => session.toObject()),
    };
  }
}
