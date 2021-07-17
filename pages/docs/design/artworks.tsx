import React from 'react'

export default function Artworks() {
  return (
    <div className="artworks">
      <p><img className="medium" src="/logo.svg" /></p>
      <h3>Logo (main) <a href="/logo.svg" target="_blank">- Download</a></h3>
      <div className="large space" />
      <p><img src="/docs/logo_filled_frame.png" /></p>
      <h3>Logo (filled) <a href="/docs/logo_filled.png" target="_blank">- Download</a></h3>
    </div>
  )
}

Artworks.meta = {
  title: 'Artworks',
  author: 'The Aleph.js Authors',
  date: '2020-10-20',
  editable: false
}
