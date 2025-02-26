import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StartProjectWrapper = styled.div`
  padding: 96px 0 44px;
  .heading{
    font-weight:700;
  }
  .footer-wrapper{
    button{
      ${media.sm`
      margin:auto;
        `}
    }
  }
  h1{
    margin-bottom: 16px;
    ${media.sm`
    margin-bottom:8px;
    `}
  }
  ${media.sm`
      padding: 56px 0;
    `}
  h2 {
    margin-bottom: 16px;
    text-transform: inherit;
    ${media.sm`
      margin-bottom: 12px;
    `}
  }
  .subtitle {
    letter-spacing: 0.19px;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight:400;
    margin-bottom:0;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .seperation {
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  }
  .project-form {
    margin-top: 24px;
    ${media.xs`
      margin-top: 20px;
    `}
    &:has(.show) {
      .collpase-select {
        .title {
          color: ${({ theme }) => theme.colors.bodyLight};
        }
      }
    }

    .collpase-select {
      margin-top: 24px;
    }
    .collpase-content {
      margin-top: 0;
    }
    .title {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
      letter-spacing: 0.14px;
    }
  }
  .testimonials {
    ${media.md`
      padding-bottom: 80px;
    `}
    ${media.xs`
      padding-bottom: 40px;
    `}
    h3{
      margin-bottom: 12px;
      ${media.sm`
        font-size:24px;
        margin-bottom:12px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      `}
    }
    .testimonial-heading {
      margin-bottom: 29px;
    }
    .testimonial-paragraph {
      margin-bottom: 32px;
      letter-spacing: 0.7px;
      max-width: 545px;
    }
  }
  .zero-height {
    height: 0;
    transition: height 1s ease-out;
    opacity: 0;
    visibility: hidden;
  }
  .add-height {
    height: auto;
    opacity: 1;
    visibility: visible;
    transition: 1s all ease-in;
  }
  .collapse-radio {
    margin-bottom: 11px;
  }
  .error-msg {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.dangerColor};
  }
  .react-tel-input  {
    margin-bottom: 8px;
    .form-control {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      padding-left: 36px;
      background-color: transparent;
      border: none;
      border-radius: 0;
      height: 60px;
      width: 100%;
      line-height:24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.bodyLight};
      }
      &:invalid {
        border-color: #dc3545;
      }
      &:valid {
        background-image: none;
        border-color: ${({ theme }) => theme.colors.dividerColor};
        &:focus {
          box-shadow: none;
          border-color: ${({ theme }) => theme.colors.dividerColor};
        }
      }
      &.invalid-number {
        border-color: #dc3545;
        &:focus {
          border: none;
          background-color: transparent;
          border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
        }
      }
    }
    .flag-dropdown {
      background-color: transparent;
      border: none;
      border-radius: 0;
      .selected-flag {
        padding: 0;
        border-radius: 0;
        &.open, &:hover {
          background-color: transparent;
        }
      }
      .search-box {
        width: 90%;
      }
    }
  }
  .terms-link {
    text-decoration: underline;
    font-weight: bold;
  }
`
export default StartProjectWrapper;
