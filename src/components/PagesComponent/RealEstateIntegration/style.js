import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RealEstateIntegrationWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 96px 0 38px;
  ${media.sm`
    padding: 56px 0;
    text-align: center;
  `}
  .desktop-data {
    ${media.md`
      display: none;
    `}
  }
  .languages-header {
    margin-bottom: 72px;
    ${media.md`
      margin-bottom: 40px;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 30px;
      letter-spacing: 0;
      text-align: center;
      ${media.xs`
        margin-bottom: 48px;
      `}
    }
  }
  .fixed-slider-pagination {
    display: flex;
    justify-content: center;
   
    ul {
      padding-left: 0;
      width: 340px;
    }
    li {
      margin-bottom: 32px;
      padding-left: 20px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      ${media.lg`
        font-size: 16px;
        line-height: 24px;
      `}
      cursor: pointer;
      &:before {
        width: 8px;
        height: 8px;
        left: 0;
        display: inline-block;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.colors.dangerColor};
        background: #fff;
        content: "";
        top: 12px;
        position: absolute;
        ${media.lg`
          top: 8px;
        `}
      }
      &:after {
        width: 1px;
        height: 38px;
        content: "";
        position: absolute;
        left: 3.5px;
        top: 25px;
        background: #d2d9dc;
        ${media.lg`
          top: 20px;
          height: 30px;
        `}
      }
      &:last-of-type {
        &:after {
          display: none;
        }
      }
      &.active {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primaryColor};
        ${media.lg`
          font-size: 20px;
          line-height: 24px;
        `}
        &:before {
          background: ${({ theme }) => theme.colors.dangerColor};
        }
      }
    }
  }
  .framework-wrapper {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${media.mobile`
      grid-gap:16px;
    `}
  }
  .framework-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 46px;
    ${media.md`
      margin-bottom: 0;
    `}
    .logo-wrapper{
      min-height: 85px;
      display: flex;
      align-items: center;
      ${media.md`
        min-height: 74px;
      `}
    }
    img {
      margin-bottom: 20px;
      ${media.md`
        max-width: 80%;
      `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
  }
  .small-screen-data {
    display: none;
    width:100%;
    ${media.md`
      display: block;
    `}
    h3 {
      margin-bottom: 0;
    }
    .logo-wrapper{
      display: block;
    }
    .languages-collapse {
      .accordion-button {
        padding: 12px 16px;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        
        &:not(.collapsed) {
          box-shadow: none;
          background-color: transparent;
        }
        &:focus {
          box-shadow: none;
        }
      }
      .accordion-body {
        padding: 16px 16px 0;
      }
    }
  }
  .languages-btn {
    display: flex;
    justify-content: center;
    margin-top:16px;
    ${media.sm`
    margin-top:32px;
    `}
  }
  .framework-item {
    min-height: 600px;
  }
`;

export default RealEstateIntegrationWrapper;
