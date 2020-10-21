import React from 'https://esm.sh/react'

export default function Artworks() {
    return (
        <div className="artworks">
            <p><img className="medium" src="/docs/logo.svg" width="180" /></p>
            <h3>Logo(main)</h3>
            <p><img src="/docs/logo_filled.png" /><br /><img src="/docs/logo_filled_frame.png" /></p>
            <h3>Logo(filled)</h3>
            <p>
                <img className="small" src="/docs/logo_3l.png" />
                <img className="small" src="/docs/logo_3l_round.png" />
            </p>
            <h3>Logo(other)</h3>
        </div>
    )
}

Artworks.meta = {
    title: 'Artworks',
    author: 'postUI Lab.',
    date: '2020-10-20'
}
