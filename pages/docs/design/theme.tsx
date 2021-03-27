import React from 'react'

export default function Theme() {
  return (
    <div className="theme">
      <p><img className="small" src="/logo.svg" /></p>
      <div className="space" />
      <p><img className="small" src="/main_title.svg" /></p>
      <div className="large space" />
      <p><img className="medium round" src="/docs/theme_color.png" /></p>
      <h3>Theme Color</h3>
      <div className="space" />
      <p><img className="medium round" src="/docs/theme_color_second.png" /></p>
      <h3>Theme Color (second)</h3>
      <div className="space" />
      <p><img className="medium round" src="/docs/theme_color_black.png" /></p>
      <h3>Theme Color (black)</h3>
    </div>
  )
}

Theme.meta = {
  title: 'Theme',
  author: 'The Aleph.js Authors',
  date: '2020-10-20',
  editable: false
}
