import React from 'react'

export default function Theme() {
  return (
    <div className="theme">
      <p><img className="sm" src="/logo.svg" /></p>
      <div className="space sm" />
      <p><img className="sm" src="/main_title.svg" /></p>
      <div className="space lg" />
      <p><span className="color" style={{ backgroundColor: '#D63369' }}>#D63369</span></p>
      <h3>Theme Color</h3>
      <div className="space" />
      <p><span className="color" style={{ backgroundColor: '#008181' }}>#008181</span></p>
      <h3>Theme Color (second)</h3>
      <div className="space" />
      <p><span className="color" style={{ backgroundColor: '#111111' }}>#111111</span></p>
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
