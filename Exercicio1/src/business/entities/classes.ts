export class Classes {
    constructor(
        public readonly id: number,
        public readonly maxStudents: number,
        public readonly startClass: string,
        public readonly initalDate: string,
        public readonly finalDate: string,
        public readonly activity: string,
        public readonly idInstructor: string
    ) { }
}

export interface ClassesInputDTO {
    maxStudents: number;
    startClass: string;
    initalDate: string;
    finalDate: string;
    activity: string;
    idInstructor: number;
}
