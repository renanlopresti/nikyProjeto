
export class Instructor {
    constructor(
        public readonly id: number,
        public readonly rgInstructor: string,
        public readonly nameInstructor: string,
        public readonly birthDate: string,
        public readonly titration: string
    ) { }

}

export interface InstructorInputDTO {
    rgInstructor: string;
    nameInstructor: string;
    birthDate: string;
    titration: string;
}

