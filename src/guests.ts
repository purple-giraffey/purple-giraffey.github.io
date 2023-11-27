export type Guest = {
    displayName: string,
    isKafana: boolean,
    isZhurka: boolean,
    fullNames?: string[],
    photo_album?: string
}

export async function getGuest(uuid: string | null): Promise<Guest | null> {
    try {
        const guest = (await fetch(`https://zvp2wtmg6szhepqlwpcv4rv5me0zqkzw.lambda-url.eu-central-1.on.aws/?uuid=${uuid}`)).json()
        return guest
    }
    catch (e) {
        console.log(e)
        return null
    }
}