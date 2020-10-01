/// <reference lib="dom" />
import { ZoomBlurFilter } from 'https://esm.sh/@pixi/filter-zoom-blur'
import * as PIXI from 'https://esm.sh/pixi.js'
import React, { useEffect, useMemo, useRef } from 'https://esm.sh/react'
import { getTravelSpeed, setTravelSpeed } from '../shared/speed.ts'

const starImage = '/star.png'

interface Star {
    sprite: PIXI.Sprite
    x: number
    y: number
    z: number
}

class Canvas {
    private _app: PIXI.Application
    private _zoomBlurFilter: ZoomBlurFilter
    private _cameraZ: number
    private _size: number
    private _fov: number
    private _starBaseSize: number
    private _stars: Star[]

    constructor(props: Props) {
        const { size, fov, starBaseSize } = props
        this._size = size * window.devicePixelRatio
        this._app = new PIXI.Application({
            width: this._size,
            height: this._size,
            antialias: true,
            transparent: true
        })
        this._zoomBlurFilter = new ZoomBlurFilter(0.01, [this._size / 2, this._size / 2])
        this._cameraZ = 0
        this._fov = fov
        this._starBaseSize = starBaseSize
        this._stars = []
        this._init()
    }

    private _init() {
        const { stage, view } = this._app
        const { devicePixelRatio } = window

        view.style.width = this._size / devicePixelRatio + 'px'
        view.style.height = this._size / devicePixelRatio + 'px'

        const triangle = new PIXI.Graphics()
        const y = this._size - Math.sin(55 * Math.PI / 180) * this._size
        triangle.beginFill(0x111111)
        triangle.drawPolygon([
            0, this._size,
            this._size, this._size,
            this._size / 2, y
        ])
        triangle.endFill()
        triangle.x = 0
        triangle.y = -y / 2
        stage.addChild(triangle)

        const starTexture = PIXI.Texture.from(starImage)
        for (let i = 0; i < Math.round(this._size * this._size / 600); i++) {
            const star = {
                sprite: new PIXI.Sprite(starTexture),
                z: 0,
                x: 0,
                y: 0
            };
            star.sprite.anchor.x = 0.5
            star.sprite.anchor.y = 0.7
            this._randomizeStar(star) // 0 ~ 2000
            stage.addChild(star.sprite)
            this._stars.push(star)
        }
        this._renderStars()
    }

    mount(el: HTMLElement) {
        el.appendChild(this._app.view)
        this.play()
    }

    unmount(el: HTMLElement) {
        this.stop()
        el.removeChild(this._app.view)
    }

    play() {
        this._app.ticker.add((delta: number) => this._travel(delta))
    }

    stop() {
        this._app.ticker.remove((delta: number) => this._travel(delta))
    }

    resize(size: number) {
        this._size = size * window.devicePixelRatio
        this._app.renderer.resize(this._size, this._size)
        this._zoomBlurFilter.center = [this._size / 2, this._size / 2]
    }

    private _travel(delta: number) {
        const { stage } = this._app
        const travelSpeed = getTravelSpeed()
        if (travelSpeed != 0) {
            this._cameraZ += delta * 10 * travelSpeed
            if (Math.abs(travelSpeed) > 0.2) {
                this._zoomBlurFilter.strength = Math.abs(travelSpeed) / 45
            } else {
                this._zoomBlurFilter.strength = 0.01
            }
            if (stage.filters === null) {
                stage.filters = [this._zoomBlurFilter]
            }
            this._renderStars()
        } else if (stage.filters.length !== 0) {
            stage.filters = []
        }
    }

    private _renderStars() {
        const { renderer: { screen } } = this._app

        this._stars.forEach(star => {
            const starSprite = star.sprite
            if (this._cameraZ > star.z) {
                this._randomizeStar(star, this._cameraZ)
            } else if (star.z - this._cameraZ > 3000) {
                this._randomizeStar(star, this._cameraZ, true)
            }

            // map star 3d position to 2d with really simple projection
            const z = star.z - this._cameraZ
            starSprite.x = star.x * (this._fov / z) * screen.width + screen.width / 2
            starSprite.y = star.y * (this._fov / z) * screen.width + screen.height / 2

            // calculate star scale & rotation.
            const dxCenter = starSprite.x - screen.width / 2
            const dyCenter = starSprite.y - screen.height / 2
            const distanceScale = Math.max(0, (2000 - z) / 2000)
            starSprite.scale.x = distanceScale * this._starBaseSize / 100

            // star is looking towards center so that y axis is towards center.
            // scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
            starSprite.scale.y = distanceScale * this._starBaseSize / 100
            starSprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2
        })
    }

    // calculate star positions with radial random coordinate so no star hits the camera.
    private _randomizeStar(star: Star, cameraZ?: number, reverse = false) {
        var deg = Math.random() * Math.PI * 2
        var distance = Math.random() * 50 + 1
        star.x = Math.cos(deg) * distance
        star.y = Math.sin(deg) * distance
        if (cameraZ === undefined) {
            star.z = Math.random() * 2000
        } else {
            if (reverse) {
                star.z = cameraZ + Math.random() * 1000
            } else {
                star.z = cameraZ + Math.random() * 1000 + 2000
            }
        }
    }
}

interface Props {
    size: number
    fov: number
    starBaseSize: number
}

export default function Logo({ size, fov, starBaseSize }: Props) {
    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
        const canvas = new Canvas({ size, fov, starBaseSize })
        if (ref.current) {
            canvas.mount(ref.current)
        }
        return () => {
            if (ref.current) {
                canvas.unmount(ref.current)
            }
        }
    }, [])

    return (
        <div
            className="logo"
            style={{
                width: size,
                height: size,
            }}
            onMouseEnter={()=>{
                setTravelSpeed(0.9)
            }}
            onMouseLeave={()=>{
                setTravelSpeed(0.1)
            }}
            ref={el => {
                if (el) {
                    ref.current = el
                }
            }}
        />
    )
}

Logo.defaultProps = {
    size: 240,
    fov: 50,
    starBaseSize: 7
}

// hidden pixi.js banner from the console
PIXI.utils.skipHello()
