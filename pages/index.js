import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { Maps } from "@components/Maps";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Contact } from "@components/Contact";
import { Partners } from "@components/Partners";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Sense Outdoors - Unparalleled Fishing Experience Mongolia"
                description="Gear up your next fishing adventure in Mongolia with our premium collection."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <Content
                                className="text-center text-xs"
                                alignment="center"
                            >
                                <p>WHAT WE BELIEVE IN</p>
                            </Content>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            ></PageTitle>
                            <Content
                                className="text-center mb-32 text-md"
                                alignment="center"
                            >
                                <p
                                    style={{
                                        color: "black",
                                        fontSize: "32px",
                                        lineHeight: "50px"
                                    }}
                                >
                                    At Sense Outdoors, we are dedicated to
                                    curating an unparalleled fishing experience
                                    for our customers. Our commitment goes
                                    beyond providing exceptional gear; it
                                    extends to fostering the growth and
                                    enriching the culture of the fishing sport
                                    in Mongolia.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <Content className="text-center" alignment="center">
                                <p>Ready to elevate your fishing experience?</p>
                            </Content>

                            <PageTitle
                                className="text-center mx-auto mt-4 mb-4"
                                type="default"
                            >
                                Browse our premium collection
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>and gear up for your next adventure!</p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 mx-auto mt-24 sm:grid-cols-2 md:grid-cols-3">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/card1.jpg"
                                            alt="Customizable Layouts image used."
                                            className="w-auto h-auto"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Fly rod
                                        </CardHeader>
                                        <p>
                                            Embark on an angler's journey like
                                            never before with our exceptional
                                            Fly Rods. Meticulously crafted for
                                            the unique demands of Mongolian
                                            landscapes, these rods redefine
                                            precision and power. Whether you're
                                            a seasoned pro or a passionate
                                            beginner, our Fly Rods are your
                                            gateway to mastering the art of
                                            casting in the stunning rivers of
                                            Mongolia.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/card2.jpg"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Fly reels
                                        </CardHeader>
                                        <p>
                                            ‍Navigate Mongolian waters with
                                            precision using our premium Fly
                                            Reels. Engineered for the toughest
                                            currents, these reels seamlessly
                                            blend cutting-edge technology with
                                            craftsmanship, ensuring a smooth and
                                            reliable performance. Elevate your
                                            angling game with gear designed to
                                            conquer every ripple and current
                                            with finesse.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/card3.jpg"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Apparel
                                        </CardHeader>
                                        <p>
                                            Our Apparel collection isn't just
                                            about aesthetics; it's about
                                            functionality and comfort tailored
                                            for the Mongolian fishing
                                            experience. From durable outer
                                            layers to moisture-wicking
                                            innerwear, gear up with apparel
                                            designed to withstand the elements.
                                            Fish in style and conquer nature
                                            with confidence in clothing that
                                            complements your angling passion.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Partnership */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <PageTitle
                                className="text-center mx-auto mt-4 mb-0"
                                type="default"
                            >
                                Partnership
                            </PageTitle>
                            <Partners />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Location */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <PageTitle
                            className="text-center mx-auto"
                            type="default"
                            style={{
                                fontSize: "36px",
                                lineHeight: "50px"
                            }}
                        >
                            Come visit us at our store.
                        </PageTitle>
                        <SectionContainer
                            id="visitus"
                            className="grid scroll-m-24 gap-8 grid-cols-1 mx-auto mt-24 md:grid-cols-12"
                        >
                            <Maps className="md:col-span-7" />
                            <Contact className="md:col-span-5" />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
