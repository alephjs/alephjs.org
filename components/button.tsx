import React, { CSSProperties, PropsWithChildren, useMemo, useState } from 'https://esm.sh/react'
import { Import } from 'https://deno.land/x/aleph/mod.ts'

export default function Button({
    className,
    width,
    height = 32,
    color,
    compact,
    strong,
    disabled,
    activated,
    round,
    icon,
    iconPosition,
    onClick,
    children
}: PropsWithChildren<{
    className?: string,
    width?: number | string,
    height?: number,
    color?: string,
    compact?: boolean,
    strong?: boolean,
    disabled?: boolean,
    activated?: boolean,
    round?: boolean,
    icon?: JSX.Element,
    iconPosition?: { top?: number | string, left?: number | string },
    onClick?(e: React.MouseEvent): void
}>) {
    const [hover, setHover] = useState(false)
    const style = useMemo(() => {
        const css: CSSProperties = {
            height,
            lineHeight: (height - (strong ? 4 : 2)) + 'px',
            borderRadius: round === false ? '5px' : height / 2 + 'px',
            fontSize: 14,
            fontWeight: 500
        }
        if (color) {
            css.color = color
            css.borderColor = color
        }
        if (hover || activated) {
            if (color === 'white') {
                css.color = "black"
                css.background = "white"
            } else {
                css.color = "white"
                css.background = "black"
            }
        }

        if (compact) {
            css.padding = '0 24px'
        }
        if (strong) {
            css.padding = '0 36px'
            css.fontWeight = 600
            css.borderWidth = '2px'
        }
        if (width) {
            css.width = width
            css.padding = 0
        }
        if (disabled) {
            css.color = '#999'
            css.borderColor = '#ccc'
            css.pointerEvents = 'none'
        }
        return css
    }, [height, color, hover, activated])

    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Import from="../style/button.less" />
            {icon && (<span style={iconPosition} className="icon">{icon}</span>)}
            {children}
        </button>
    )
}
