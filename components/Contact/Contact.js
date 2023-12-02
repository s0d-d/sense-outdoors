import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Contact = ({ className }) => {
    return (
        <div
            className={`flex justify-center items-center ${
                className && className
            }`}
        >
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <p style={{ fontSize: "24px", lineHeight: "50px" }}>
                        Contact info
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <img
                        src={"phone-icon.png"}
                        alt={`Phone icon`}
                        className="object-cover w-8 h-8"
                    />
                    <div>
                        <p>(+976) 9997 9647</p>
                        <p>(+976) 8040 8007</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <img
                        src={"email-icon.png"}
                        alt={`Email icon`}
                        className="object-cover w-10 h-10"
                    />
                    <p>ayanzonllc@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
