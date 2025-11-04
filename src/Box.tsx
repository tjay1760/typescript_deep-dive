

const Box = () => {
  return (
    <div
    style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        clipPath: 'path("M 10 20 L 100 100 L 10 100 Z")',
    }}
    >Box</div>
  )
}

export default Box