export class User {
    username: string;
    email: string;
    points: number;
    dateLastCompletedCourse: number;
    coursesCompleted: Array<Course>;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.points = 0;
        this.dateLastCompletedCourse = Date.now();
        this.coursesCompleted = [] as Array<Course>;
    }
}

export default User;