import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Partners = () => {
    const logos = [
        "sage-icon.png",
        "rio-icon.png",
        "redington-icon.png",
        "farbank-icon.png"
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    className="w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 flex items-center justify-center"
                >
                    <div className="aspect-w-2 aspect-h-1">
                        <img
                            src={logo}
                            alt={`Partner Logo ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
