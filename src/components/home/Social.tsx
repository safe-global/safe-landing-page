import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import ContentWrapper from '../Layout/ContentWrapper'
import Heading from '../ui/Heading'

const SectionContainer = styled.div`
  padding-bottom: 80px;

  background-color: ${p => p.theme.palette.pink};
`

const Row = styled.div`
  display: flex;
`

const LCol = styled.div`
  flex-basis: 40%;

  display: flex;
  align-items: center;
  height: 60px%;
`

const RCol = styled.div`
  flex-basis: 60%;

  display: flex;
  justify-content: space-between;
`

const SImage = styled(Image)`
  box-shadow: 1px 2px 10px 0 rgba(212, 212, 211, 0.59);
  border-radius: 50%;
`

const sectionQuery = graphql`
  query {
    github: file(relativePath: { eq: "github-icon.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    email: file(relativePath: { eq: "email-icon.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    medium: file(relativePath: { eq: "medium-icon.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    telegram: file(relativePath: { eq: "telegram-icon.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter-icon.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const Social: React.FC = () => (
  <StaticQuery query={sectionQuery}>
    {data => (
      <SectionContainer>
        <ContentWrapper>
          <Row>
            <LCol>
              <Heading small>Get In Touch</Heading>
            </LCol>
            <RCol>
              <a href="https://twitter.com/gnosisSafe" target="_blank">
                <SImage fixed={data.twitter.childImageSharp.fixed} />
              </a>
              <a href="mailto:safe@gnosis.io" target="_blank">
                <SImage fixed={data.email.childImageSharp.fixed} />
              </a>
              <a href="https://blog.gnosis.pm/tagged/safe" target="_blank">
                <SImage fixed={data.medium.childImageSharp.fixed} />
              </a>
              <a href="https://t.me/GnosisSafe" target="_blank">
                <SImage fixed={data.telegram.childImageSharp.fixed} />
              </a>
              <a
                href="https://github.com/gnosis?utf8=%E2%9C%93&q=safe"
                target="_blank"
              >
                <SImage fixed={data.github.childImageSharp.fixed} />
              </a>
            </RCol>
          </Row>
        </ContentWrapper>
      </SectionContainer>
    )}
  </StaticQuery>
)

export default Social