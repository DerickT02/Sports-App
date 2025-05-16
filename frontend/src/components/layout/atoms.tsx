import styled, { css } from 'styled-components';
import {
  space,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  layout,
  FlexboxProps,
  flexbox,
  position,
  PositionProps,
  borders,
  BordersProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface Props
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    PositionProps,
    BordersProps,
    TypographyProps {
  gap?: number | string;
  transform?: string;
}

const customProps = css<Props>`
  gap: ${({ gap }) => gap && (typeof gap === 'number' ? `${gap}px` : gap)};
  transform: ${({ transform }) => transform};
`;

// Container that can be used for anything but usually to hold a single item
export const Box = styled.div<Props>`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${position};
  ${borders};
  ${typography};

  ${customProps};
`;

// Container that aligns content horizontally
export const Horizontal = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${position};
  ${borders};
  ${typography};

  ${customProps};
`;

// Container that aligns content vertically
export const Vertical = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${position};
  ${borders};
  ${typography};

  ${customProps};
`;

// Puts content in the center of the page
export const FullPageCenter = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${position};
  ${borders};
  ${typography};

  ${customProps};
`;

// Provides spaces between elements
export const Spacer = styled.div<Props>`
  ${space};
  ${layout};
  ${borders};
`;

export const FullPageBackground = styled.div<PositionProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -5;
  ${position};
`;

interface Props extends LayoutProps, SpaceProps, ColorProps, TypographyProps {}

export const Table = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  ${space};
  ${color};
  ${typography};

  th, td {
    padding: 8px;
    text-align: center;
    border: 1px solid var(--color-border);
  }

  th {
    background-color: var(--color-surface);
    color: var(--color-heading);
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: var(--color-bg);
  }

  tr:hover {
    background-color: var(--color-muted);
  }
`;
