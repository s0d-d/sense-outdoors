import { SectionContainer } from "@components/Section";
import clsx from "clsx";

const titleVariant = {
    heavy: "text-4xl lg:text-6xl",
    default: "text-3xl lg:text-5xl"
};
export const PageTitle = ({ children, className = "", type = "" }) => {
    const titleClass = clsx("h2 font-semibold", titleVariant[type], className);
    return (
        <SectionContainer
            className={`page-title--content max-w-3xl ${
                className && className
            }`}
            // style={}
        >
            <h1
                className={titleClass}
                style={{
                    fontSize: "36px",
                    fontWeight: "normal",
                    lineHeight: "50px"
                }}
            >
                {children}
            </h1>
        </SectionContainer>
    );
};
