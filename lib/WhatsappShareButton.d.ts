/// <reference types="react" />
declare const WhatsappShareButton: import("react").ForwardRefExoticComponent<Omit<import("./ShareButton").Props<{
    title?: string | undefined;
    separator?: string | undefined;
}>, "forwardedRef" | "networkName" | "networkLink" | "opts"> & {
    title?: string | undefined;
    separator?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default WhatsappShareButton;
