/// <reference types="react" />
declare const RedditIcon: import("react").FC<Omit<import("react").SVGProps<SVGSVGElement>, "width" | "height"> & {
    bgStyle?: import("react").CSSProperties | undefined;
    borderRadius?: number | undefined;
    iconFillColor?: string | undefined;
    round?: boolean | undefined;
    size?: string | number | undefined;
}>;
export default RedditIcon;
