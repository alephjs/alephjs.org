import React from 'https://esm.sh/react'

export default function Theme() {
    return (
        <div className="artworks">
            <p><img className="round" src="/docs/theme_color.png" /></p>
            <h3>Theme Color</h3>
        </div>
    )
}

Theme.meta = {
    title: 'Artworks',
    author: 'postUI Lab.',
    date: '2020-10-20',
    editable: false
}
