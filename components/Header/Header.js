import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-black backdrop-filter backdrop-blur-md bg-opacity-95"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/sense.png"
                                alt="logo"
                                className="h-14 w-auto"
                                height="100"
                                width="200"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    {/* <Nav /> */}
                    {/* <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="https://github.com/christian-luntok/nutritrack"
                            className="btn btn--primary ml-4"
                        >
                            Visit Us
                        </a>
                    </ButtonGroup> */}
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
