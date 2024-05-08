import {Safe} from './safe';

export interface Building {
    id: number,
    buildingNumber: string,
    buildingSubnumber?: string,
    district: string,
    city: string,
    safe: Safe
}