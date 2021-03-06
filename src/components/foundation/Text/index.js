import React from 'react';
import PropTypes from 'prop-types'
import { breakpointsMedia } from '../../../theme/utilis/breakpointsMedia'
import styled, { css } from 'styled-components';
import {propToStyle} from '../../../theme/utilis/propToStyle';
import Link from '../../commons/Link';

export const TextStyleVariantsMap = {

     paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,

    smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
     ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
    `,
};
    

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}

   /* ${function (props) {
        return propToStyle('textAlign', props)
    }}

    ${function(props) {
        return {
            textAlign: props.textAlign,
        }
    }} */
`;


export default function Text({
    tag,
     variant,
      children,
      href,
      ...props
    
    }) {

    if (href) {
        return (
            <TextBase
            as={Link}
            href={href}
            variant={variant}

            {...props}
            >
                {children}
            </TextBase>
        )
    }

 return(
    <TextBase
        as={tag}
        variant={variant}
        {...props}
        //style
        //classnames
        // e por a?? vai
    >
        {children}
    </TextBase>
 );
}

Text.propTypes = {
    tag: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node,
}


Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
    children: null,
    href:'',
}

// p
 // h1, h2... h6
  // span