export class User {
    username: string;
    email: string;
    dateFirstStreakTime: number;
    courseCompletions: Array<CourseUserRefrence>;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.dateFirstStreakTime = Date.now();
        this.courseCompletions = [] as Array<CourseUserRefrence>;
    }
}

export interface CourseUserRefrence {
    name: string;
    questionsCorrect: Array<string>;
}

export default User;