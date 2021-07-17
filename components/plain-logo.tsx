import React, { useMemo } from 'react'

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
        <defs>
          <linearGradient id="gradient" x1="100%" y1="100%">
            <stop offset="0%" stopColor="#f9f9f9">
              <animate attributeName="stop-color" values="#fafafa;#ccc;#ccc;#fafafa" dur="1.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ccc" stopOpacity="0.5">
              <animate attributeName="stop-color" values="#ccc;#fafafa;#fafafa;#ccc" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="offset" values="0.1;.50;.50;0.1" dur="1.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path
          d={`M 0,${size - y} L ${size},${size - y} L ${size / 2},0 z`}
          fill="url(#gradient)"
        />
      </svg>
    </div>
  )
}

PlainLogo.defaultProps = {
  size: 200,
}

