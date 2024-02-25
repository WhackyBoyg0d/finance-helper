export class User {
    username: string;
    email: string;
    dateLastCompletedCourse: number;
    courseCompletions: Array<CourseUserRefrence>;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.dateLastCompletedCourse = Date.now();
        this.courseCompletions = [] as Array<CourseUserRefrence>;
    }
}

interface CourseUserRefrence {
    name: string;
    questionsCorrect: Array<string>;
}

export default User;