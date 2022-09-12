
export class Telephone {
    constructor(
        public readonly id: number,
        public readonly phoneNumber: string,
        public readonly responsable: string,
        public readonly idInstructor: string
    ) { }

}

export interface TelephoneInputDTO {
    phoneNumber: string;
    responsable: string;
    idInstructor: string;
}

