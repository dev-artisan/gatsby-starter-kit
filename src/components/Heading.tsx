import React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  title: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #115d06;
`

const Title = styled.h1`
  margin-top: 30px;

`


export default (props: IHeadingProps) => {
  const {  title } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}
