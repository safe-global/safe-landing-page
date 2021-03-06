import React from 'react'
import styled from 'styled-components'
import { sizes } from '../../../styles/styleUtils'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 16px;
  min-height: 80px;
  color: ${(p) => p.theme.palette.navy};
  margin-bottom: 16px;
`

const Title = styled.p`
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: ${sizes.md}px) {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
  }
`

const Text = styled.p`
  line-height: normal;
  flex: 1;
  margin-top: 16px;
`

interface CardProps {
  icon: React.FC
  title: string
  children: React.ReactNode
}

const Card = ({ icon: Icon, title, children }: CardProps) => (
  <CardContainer>
    <Icon />
    <Title>{title}</Title>
    <Text>{children}</Text>
  </CardContainer>
)

export default Card
