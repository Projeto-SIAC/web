import React from 'react'
import styled from 'styled-components'

import { Icon } from 'antd'

const Container = styled.div`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: palevioletred;
  }
`

const Title = styled.div`
  margin-top: 0.5rem;
`

const IconCard = ({title, onClick, titleStyle, size, style, ...props}) => {
  return (
    <Container onClick={onClick}>
      <Icon style={{ fontSize: size, ...style }} {...props} />

      <Title style={titleStyle}>{title}</Title>
    </Container>
  )
}

export default IconCard
