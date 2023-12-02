import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "",
        items: []
        //     {
        //         label: "Features",
        //         href: "#features"
        //     },
        //     {
        //         label: "Testimonials",
        //         href: "#testimonials"
        //     },
        //     {
        //         label: "FAQ",
        //         href: "#faq"
        //     }
        // ]
    },
    {
        title: "Social Media",
        items: [
            // {
            //     label: "About",
            //     href: "https://github.com/christian-luntok/",
            //     target: "_blank"
            // },
            // {
            //     label: "Twitter",
            //     href: "https://github.com/christian-luntok/",
            //     target: "_blank"
            // },
            // {
            //     label: "Instagram",
            //     href: "https://github.com/christian-luntok/",
            //     target: "_blank"
            // },
            {
                label: "Facebook",
                href: "https://facebook.com/senseoutdoors/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-black text-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16 flex flex-col md:flex-row">
                    <div className="flex-1">
                        <div className="footer--logo flex gap-8 items-center">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/sense.png"
                                    alt="logo"
                                    className="h-20 w-auto"
                                    height="25"
                                    width="1000"
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="footer-menu flex flex-wrap md:flex-nowrap justify-between text-center md:text-end">
                            {DATA.map((footerLinks) => (
                                <div
                                    key={footerLinks.title}
                                    className="footer-menu--container md:w-1/4"
                                >
                                    <h3 className="font-bold text-base mb-2">
                                        {footerLinks.title}
                                    </h3>
                                    <ul className="footer-menu--list">
                                        {footerLinks.items.map((footerItem) => (
                                            <li
                                                key={footerItem.label}
                                                className="footer-menu--list-item mb-2"
                                            >
                                                <a
                                                    className="block w-auto font-medium transition-colors duration-300 hover:underline"
                                                    href={footerItem.href}
                                                    target={footerItem.target}
                                                >
                                                    {footerItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6 text-center">
                    <p className="my-0">
                        © {year} Sense Outdoors. All rights reserved.
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
