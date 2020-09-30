export const minSpeed = 0.01

let travelSpeed = 0.1
let travelTicker: any = null

export function getTravelSpeed(): number {
    return travelSpeed
}

export function setTravelSpeed(speed: number) {
    if (Math.abs(speed) < minSpeed) {
        travelSpeed = speed >= 0 ? minSpeed : -minSpeed
    } else {
        travelSpeed = speed
    }
}

export function setTravelSpeedTo(from: number, to: number, time: number) {
    if (travelTicker !== null) {
        clearInterval(travelTicker)
    }
    if (time == 0) {
        travelSpeed = to
        return
    }
    const spf = 1000 / 30
    const range = to - from
    const steps = time / spf
    const step = range / steps
    let i = 0
    travelSpeed = from
    travelTicker = setInterval(() => {
        travelSpeed = from + step * (i + 1)
        if (++i >= steps) {
            clearInterval(travelTicker)
            travelTicker = null
            travelSpeed = to
        }
    }, spf)
}
