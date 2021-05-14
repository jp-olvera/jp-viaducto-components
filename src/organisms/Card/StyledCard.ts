import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledContentI {
  readonly noImage: boolean;
}
export const StyledContent = styled.div<StyledContentI>`
  flex-grow: 1;
  padding: ${({ noImage }) => (noImage ? '1.2rem' : '1.688rem')};
  background-color: #ffffff;
  /* Esto es el extra */
  .contentWithAvatar {
    display: flex;
    justify-content: space-between;
    .avatarWrapper {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
    .time {
      text-align: right;
      display: inline-flex;
      vertical-align: baseline;
      gap: 1rem;
      align-items: center;
    }
  }
`;

interface StyledNormalCardI {
  readonly elevation: number;
  readonly elevationDirection: string;
  readonly onlyImage: boolean;
  readonly noImage: boolean;
  readonly configuration: any;
  readonly transition?: string;
}
export const StyledNormalCard = styled.div<StyledNormalCardI>`
  background-color: #ffffff;
	transition: ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};
  box-sizing: border-box;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  height: ${({ onlyImage, noImage }) =>
    noImage ? '16.5rem' : onlyImage ? '25.25rem' : '29.625rem'};
  width: 100%;
  @media screen and (min-width: ${({ configuration }) =>
    configuration.breakpoints.md}) {
    width: 21.875rem;
  }
  padding: ${({ onlyImage }) => (onlyImage ? '1.688rem' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Esto no */
  border: 0.063rem solid #eaedf3;
  border-radius: 0.25rem;

  /* esto sí */
  .img {
    border-radius: 0.25rem 0.25rem 0 0;
    width: 100%;
    height: ${({ onlyImage }) => (onlyImage ? '100%' : '11.875rem')};
    object-fit: cover;
  }
  .footer {
    height: 3.75rem;
    background-color: #ffffff;
    border: none;
    border-top: 0.063rem solid #eaedf3;
    border-radius: 0 0 0.25rem 0.25rem;
    .fakeFooter {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: ${({ noImage }) => (noImage ? '0 1.2rem' : '0 2rem')};
      & > button {
        color: white;
        width: 100%;
        @media screen and (min-width: ${({ configuration }) =>
    configuration.breakpoints.md}) {
          width: 7.438rem;
        }
      }
    }
  }
`;

interface ColI{
  collapse?: boolean;
  transition?: string;
  configuration?: any;
}
export const Collapse = styled.div<ColI>`
  .collapse {
		transition: ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};
    opacity: ${({ collapse }) => (collapse ? '0' : 1)};
    height: ${({ collapse }) => (collapse ? '0' : 'auto')};
  }
`;

interface StyledCollapsibleCardI {
  elevation: number;
  elevationDirection: string;
  configuration?: any;
  isActive: boolean;
  transition?: string;
}
export const StyledCollapsibleCard = styled.div<StyledCollapsibleCardI>`
  transition: ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};
  background-color: #ffffff;
  box-sizing: border-box;
  width: 100%;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  @media screen and (min-width: ${({ configuration }) =>
    configuration.breakpoints.md}) {
    max-width: 69.375rem;
    max-height: 17.813rem;
    .size {
      width: 100%;
      height: 6.125rem;
    }
  }

  /* Esto no */
  border: 0.063rem solid #eaedf3;
  border-radius: 0.25rem;

  /* esto sí */
  .size {
    width: 100%;
    /* height: 6.125rem; */
  }
  .main-description {
    padding: ${({ configuration }) => configuration.spacing.lg};
    box-sizing: border-box;
    width: 100%;
    /* Esto no */
    display: flex;
    justify-content: space-between;
    .avatarWrapper {
      display: flex;
      align-items: center;
      .description {
        padding-left: 1.12rem;
      }
    }
    .actions {
      .sub {
        display: flex;
        align-items: center;
        gap: 3.813rem;
        button {
          color: white;
        }
        .imgs {
          display: inline-flex;
          align-items: center;
          img {
            margin: 0 0.375rem;
            border-radius: 4rem;
          }
        }
      }
    }
  }
  .full-description {
    box-sizing: border-box;
    padding: 0 ${({ configuration }) => configuration.spacing.lg};
    width: 100%;
  }
  .footer {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem ${({ configuration }) => configuration.spacing.lg};
    border-top: 0.06rem solid #eaedf3;
    box-sizing: border-box;
    button {
      color: white;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blocks {
      display: flex;
      align-items: center;
      gap: 3.5rem;
    }
  }
`;
