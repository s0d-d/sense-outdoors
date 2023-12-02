import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={600}
                height={480}
                alt={alt}
                // objectFit="cover"
                loading="lazy"
                className={`w-full h-48 object-cover ${
                    imageClassName && imageClassName
                }`}
            />
        </div>
    );
};
