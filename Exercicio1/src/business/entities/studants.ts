
export class Studants {
    constructor(
        public readonly id: number,
        public readonly codeRegistry: number,
        public readonly dateRegistry: string,
        public readonly nameStudant: string,
        public readonly address: string,
        public readonly phoneNumber: string,
        public readonly birthDate: string,
        public readonly height: number,
        public readonly presence: number,
        public readonly privation: number,
        public readonly idClasses: number,
        public HallMonitor: boolean | null
    ) { }

}

export interface StudantsInputDTO {
    codeRegistry: string;
    dateRegistry: string;
    nameStudant: string;
    address: string;
    phoneNumber: string;
    birthDate: number;
    height: number;
    presence: number;
    privation: number;
    idClasses: number;
    HallMonitor: boolean | null;
}

