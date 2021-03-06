import React from 'react'
import styled from 'styled-components'
import ContentWrapper from '../../Layout/ContentWrapper'
import { PROJECTS } from './projects'
import {
  ENTERPRISES_CATEGORY,
  useAnalytics,
} from '../../../utils/googleAnalytics'

const Container = styled.section`
  padding: 50px 20px 150px;
  color: ${(p) => p.theme.palette.grey};
  background-color: ${(p) => p.theme.palette.navy};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0 0 40px 0;
  }
`

const LCol = styled.div`
  flex-basis: 25%;
  min-width: 200px;
  flex-direction: column;
`

const RCol = styled.div`
  flex-basis: 72.5%;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-column-gap: 91px;
  grid-row-gap: 51px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const SHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  line-height: normal;
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 28px;
  }
`

const ImageAnchor = styled.a`
  height: 70px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media screen and (max-width: 980px) {
    height: 35px;
  }
`

const Image = styled.img`
  max-width: 160px;
  max-height: 54px;
  width: auto;
  height: auto;
  @media screen and (max-width: 980px) {
    max-width: 104px;
    max-height: 35px;
  }
`

const Projects = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SWrapper>
        <LCol>
          <SHeading>Used by</SHeading>
        </LCol>
        <RCol>
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              onClick={() =>
                trackEvent({
                  category: ENTERPRISES_CATEGORY,
                  action: 'Projects section',
                  label: `Click ${project.name}`,
                })
              }
            >
              <ImageAnchor
                title={project.name}
                href={project.websiteURL}
                target="_blank"
              >
                <Image src={project.imageURL} />
              </ImageAnchor>
            </div>
          ))}
        </RCol>
      </SWrapper>
    </Container>
  )
}

export default Projects
