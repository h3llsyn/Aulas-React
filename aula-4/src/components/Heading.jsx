export function Heading({ children }) {
  let cor = 'black'

  if (typeof children === 'string') {
    if (children.includes('Lucro')) {
      cor = 'blue'
    }

    if (children.includes('Prejuízo')) {
      cor = 'red'
    }
  }

  return (
    <h1 style={{ color: cor }}>
      {children}
    </h1>
  )
}