import React, { CSSProperties, PropsWithChildren, useMemo, useState } from 'react'

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
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      border: '1px solid #000',
      borderRadius: round === false ? '5px' : height / 2 + 'px',
      lineHeight: 1,
      fontSize: 16,
      fontWeight: 500,
      padding: '0 36px',
      transition: 'all 0.21s ease-in-out',
      cursor: 'pointer'
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
      css.padding = '0 16px'
    }
    if (strong) {
      css.borderWidth = '2px'
      css.fontWeight = 600
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
      {icon && (<span style={iconPosition} className="icon">{icon}</span>)}
      {children}
    </button>
  )
}
