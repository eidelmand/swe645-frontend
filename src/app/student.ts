//Daniela Eidelman
//Yaron Eidelman
//This program is a student survey. After the survey is completed
//it displays a list of student ids. Clicking on the student id gives their
//information

export class Student {
    constructor(
        public id: string,
        public username: string,
        public street: string,
        public city: string,
        public state: string,
        public zip: string,
        public phone: string,
        public email: string,
        public date: string,
        public url: string,
        public recommendation: string,
        public isStudents: boolean,
        public isLocation: boolean,
        public isCampus: boolean,
        public isAtmosphere: boolean,
        public isDorms: boolean,
        public isSports: boolean,
        public reference: string
    ){}
}
