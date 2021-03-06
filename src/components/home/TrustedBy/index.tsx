import React from 'react'
import styled from 'styled-components'
import { OVERVIEW_CATEGORY, useAnalytics } from '../../../utils/googleAnalytics'
import ContentWrapper from '../../Layout/ContentWrapper'
import { TRUSTED_BY_COMPANIES } from './companies'

const Container = styled.section`
  padding: 0 20px;
  padding-bottom: 50px;
  color: ${(p) => p.theme.palette.navy};
  background: ${(p) => p.theme.palette.darkGreyBackground};
  overflow: hidden;
  @media screen and (max-width: 980px) {
    padding: 0 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0px 0px 40px 0px;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    padding: 30px 0;
    font-size: 36px;
  }
`

const ImageAnchor = styled.a``

const ImageWrapper = styled.div`
  background: ${(p) => p.theme.palette.lightGreyBackground};
  border-radius: 8px;
  height: 128px;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 980px) {
    height: 70px;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 60px;
  width: auto;
  height: auto;
  @media screen and (max-width: 980px) {
    max-height: 64px;
    max-width: 90px;
  }
`

const TrustedBy = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SWrapper>
        <SHeading>Trusted by</SHeading>
        <Grid>
          {TRUSTED_BY_COMPANIES.map((company) => (
            <div
              key={company.name}
              onClick={() =>
                trackEvent({
                  category: OVERVIEW_CATEGORY,
                  action: 'Trusted By section',
                  label: `Click ${company.name}`,
                })
              }
            >
              <ImageAnchor
                title={company.name}
                href={company.websiteURL}
                target="_blank"
              >
                <ImageWrapper>
                  <Image src={company.imageURL} />
                </ImageWrapper>
              </ImageAnchor>
            </div>
          ))}
        </Grid>
      </SWrapper>
    </Container>
  )
}

export default TrustedBy
