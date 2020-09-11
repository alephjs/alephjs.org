import React from 'https://esm.sh/react'

export default function Logo({ height = 36 }: { height?: number }) {
    return (
        <img src="/logo.svg" height={height} title="postjs" />
    )
}
