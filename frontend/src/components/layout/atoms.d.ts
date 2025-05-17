import { SpaceProps, ColorProps, LayoutProps, FlexboxProps, PositionProps, BordersProps, TypographyProps } from 'styled-system';
interface Props extends LayoutProps, SpaceProps, ColorProps, FlexboxProps, PositionProps, BordersProps, TypographyProps {
    gap?: number | string;
    transform?: string;
}
export declare const Box: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const Horizontal: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const Vertical: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const FullPageCenter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const Spacer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export declare const FullPageBackground: import("styled-components/dist/types").IStyledComponentBase<"web", any> & string;
interface Props extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
}
export declare const Table: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, Props>> & string;
export {};
