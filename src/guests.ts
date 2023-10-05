import * as guestList from './assets/guest-list.json'

export type Guest = {
    displayName: string,
    isKafana: boolean,
    isZhurka: boolean,
    fullNames?: string[]
}

export type GuestList = { [uuid: string]: Guest }

export function getGuests(): GuestList {
    return JSON.parse(JSON.stringify(guestList))
}

export function getGuest(uuid: string | null): Guest | null {
    const guestList = getGuests()
    if (uuid && uuid in guestList) {
        return guestList[uuid]
    } else {
        return null
    }
}