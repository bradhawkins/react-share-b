/// <reference types="react" />
declare const PocketShareButton: import("react").ForwardRefExoticComponent<Omit<import("./ShareButton").Props<{
    title?: string | undefined;
}>, "forwardedRef" | "networkName" | "networkLink" | "opts"> & {
    title?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default PocketShareButton;
