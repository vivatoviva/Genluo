const Tag = ({name, size}) => {
  let sizetopx = parseInt(size * 30 + 10, 10);

  return (
    <div>
      前端
      <style jsx>{`
        div {
          font-size: ${sizetopx}px;

        }
      `}</style>
    </div>
  )
}

export default ({items}) =>
  <div>
    {
      items.map((item, index) => {
        <Tag item={item}/>
      })
    }
  </div>
