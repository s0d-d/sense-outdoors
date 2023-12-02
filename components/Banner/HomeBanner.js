import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container pt-1 pb-16">
            <div
                className="page-banner--inner-container wrap wrap-px z-10 flex items-center"
                style={{
                    backgroundImage: `url('/banner_image.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh" // Adjust the height as needed
                }}
            >
                {/* Hero Text */}
                <div style={{ flex: "1" }}>
                    <div className="pt-2 md:py-28">
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <PageTitle
                                className="text-center mx-auto text-white font-normal"
                                type="heavy"
                            >
                                Welcome to
                                <br />
                                Sense Outdoors
                            </PageTitle>
                        </MotionBTTContainer>
                        <MotionBTTContainer
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Content
                                className="text-center text-white"
                                alignment="center"
                            >
                                <p>
                                    - where passion meets precision in the world
                                    of fishing in Mongolia!.{" "}
                                </p>
                            </Content>
                            <div className="mt-6 mb-16 text-center">
                                <ButtonGroup alignment="center">
                                    <a
                                        role="button"
                                        href="#visitus"
                                        className="btn btn--primary"
                                    >
                                        VISIT US
                                        {/* <Icon icon="material-symbols:arrow-forward-rounded" /> */}
                                    </a>
                                </ButtonGroup>
                            </div>
                        </MotionBTTContainer>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
