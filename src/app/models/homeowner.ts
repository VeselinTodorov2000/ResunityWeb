import {Building} from './building';

export interface Homeowner {
    homeownerName: string,
    howeownerCompany: string,
    profileIcon: string
    buidings: Building[]
}