interface Props {
  from: string  // background color (current section)
  to: string    // fill color (next section)
  flip?: boolean
}

export default function DiagonalDivider({ from, to, flip = false }: Props) {
  // flip=false: \ shaped — 'to' fills lower-left triangle
  // flip=true:  / shaped — 'to' fills lower-right triangle
  const path = flip
    ? 'M0,72 L1440,72 L1440,0 Z'
    : 'M0,0 L0,72 L1440,72 Z'

  return (
    <div style={{ background: from, height: 72, lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 72, display: 'block' }}
        aria-hidden
      >
        <path d={path} fill={to} />
      </svg>
    </div>
  )
}
