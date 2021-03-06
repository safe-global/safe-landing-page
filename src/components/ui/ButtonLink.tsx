import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { ITheme } from '../../styles/theme'

interface ELProps {
  to: string
  children: React.ReactNode
  target?: string
  className: string
}

const ExternalLink: React.FC<ELProps> = ({
  to,
  children,
  target,
  className,
}) => (
  <a href={to} rel="noopener noreferrer" target={target} className={className}>
    {children}
  </a>
)

interface BtnLinkProps {
  url: string
  children: React.ReactNode
  target?: string
  className?: string
  explicitExternal?: boolean
  colorScheme?: ColorScheme
  theme: ITheme
}

const ButtonLink: React.FC<BtnLinkProps> = ({
  url,
  children,
  target = '_blank',
  className = '',
  explicitExternal = false,
}) => {
  const internalLink = /^\/(?!\/)/.test(url)
  const LinkComponent = internalLink && !explicitExternal ? Link : ExternalLink

  return (
    <LinkComponent to={url} target={target} className={className}>
      {children}
    </LinkComponent>
  )
}

type ColorScheme = 'navy' | 'green' | 'white' | 'grey'

const colorsCSS = css`
  background-color: ${(p: BtnLinkProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.navy
    }

    if (colorScheme === 'white') {
      return p.theme.palette.pink
    }

    if (colorScheme === 'grey') {
      return p.theme.palette.greyGreen
    }

    return p.theme.palette.primary
  }};
  color: ${(p: BtnLinkProps) => {
    const { colorScheme } = p

    if (colorScheme === 'navy') {
      return p.theme.palette.pink
    }

    if (colorScheme === 'white') {
      return p.theme.palette.navy
    }

    return p.theme.palette.pink
  }};
  box-shadow: ${(p: BtnLinkProps) => {
    const { colorScheme } = p

    if (colorScheme === 'white') {
      return '1px 2px 10px 0 rgba(40, 54, 61, 0.18)'
    }

    return '1px 2px 10px 0 rgba(212, 212, 211, 0.59)'
  }};

  &:hover {
    background-color: ${(p: BtnLinkProps) => {
      const { colorScheme } = p

      if (colorScheme === 'white') {
        return p.theme.palette.greyGreen
      }

      if (colorScheme === 'navy') {
        return p.theme.palette.slateGray
      }

      if (colorScheme === 'grey') {
        return p.theme.palette.slateGray
      }

      return p.theme.palette.primaryHover
    }};
  }
`

const SButtonLink = styled(ButtonLink)`
  ${colorsCSS}

  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`

export default SButtonLink
