import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Exclusive Selection",
        content:
            "Immerse yourself in the art of angling with our carefully curated selection process. We proudly distribute top-tier brands that harmonize with the unique demands of the Mongolian environment and market. Currently, we've formed a successful partnership with Farbank, the lead company of Sage and  Redington, offering you access to premium fishing rods that redefine excellence.",
        align: "right",
        image: "/features1.jpg"
    },
    {
        id: uuid(),
        title: "Explore Mongolia's Waters",
        content:
            "Embark on a journey with gear designed for the breathtaking landscapes of Mongolia. From pristine rivers to hidden gems, our products are crafted to enhance every fishing expedition.",
        align: "left",
        image: "/features2.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-12 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left"
                                ? "md:order-1 md:col-span-7"
                                : "md:col-span-7"
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content md:col-span-5 ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32 mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black"></h3>
                        <PageTitle className="text-black">
                            {item.title}
                        </PageTitle>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
