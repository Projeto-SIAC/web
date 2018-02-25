import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const InnerContainer = styled.main`
  background: #fff;
  padding: 1.75rem;
  borderRadius: 0.2rem;
`

const PageLayout = ({breadcrumb, children}) => {
  return (
    <Container>
      {breadcrumb()}
      <InnerContainer>
        {children}
      </InnerContainer>
    </Container>
  )
}

export default PageLayout
