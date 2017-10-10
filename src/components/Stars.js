import React from 'react'
import styled from 'styled-components'

const Stars = styled.div`

`

export default ({count = 3}) => {
  const starCount = Array.from(Array(count))
  .map((num, i) => `stars${i}`)
  return (
    <span className="space">
    {starCount.map(id => <Stars key={`image-${id}`} id={id} />)}
    </span>
  )
}
