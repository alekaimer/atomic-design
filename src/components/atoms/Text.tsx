interface TextProps {
  children: React.ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export const Text = ({ children, type }: TextProps) => {
  if (type === 'h1') {
    return <h1>{children}</h1>
  }

  if (type === 'h2') {
    return <h2>{children}</h2>
  }

  if (type === 'h3') {
    return <h3>{children}</h3>
  }

  if (type === 'h4') {
    return <h4>{children}</h4>
  }

  if (type === 'h5') {
    return <h5>{children}</h5>
  }

  if (type === 'h6') {
    return <h6>{children}</h6>
  }

  if (type === 'p') {
    return <p>{children}</p>
  }

  if (type === 'span') {
    return <span>{children}</span>
  }

  return <>{children}</>
}