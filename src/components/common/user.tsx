export class User {
    username: string;
    email: string;
    points: number;
    dateLastCompletedCourse: Date;
    coursesCompleted: Array<Course>;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.points = 0;
        this.dateLastCompletedCourse = new Date();
        this.coursesCompleted = {} as Array<Course>;
    }
}