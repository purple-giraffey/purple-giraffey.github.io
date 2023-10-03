export type Guest = {
    displayName: string,
    isKafana: boolean,
    fullNames?: string[]
}


export const GUESTS: { [uuid: string]: Guest } = {
    "1": { displayName: 'Marina', isKafana: true },
    "2": { displayName: 'Newk', isKafana: true },
    "3": { displayName: 'Abed & Giraffe', isKafana: false, fullNames: ["Abed Machkovich", "Thomas Girafferson"] },
}

export function getGuest(uuid: string | null): Guest | null {
    if (uuid && uuid in GUESTS) {
        return GUESTS[uuid]
    } else {
        return null
    }
}