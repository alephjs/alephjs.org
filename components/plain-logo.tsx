import React, { useMemo } from 'https://esm.sh/react'

interface Props {
    size: number
}

export default function PlainLogo({ size }: Props) {
    const y = useMemo(() => size - Math.sin(54 * Math.PI / 180) * size, [size])

    return (
        <div
            className="logo is-plain"
            style={{
                width: size,
                height: size,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <path
                    d={`M 0,${size - y} L ${size},${size - y} L ${size / 2},0 z`}
                    stroke="#999"
                    stroke-dasharray="4"
                    fill="white"
                />
            </svg>
        </div>
    )
}

PlainLogo.defaultProps = {
    size: 200,
}

