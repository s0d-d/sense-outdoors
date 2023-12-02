import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px"
};

const center = {
    lat: 47.89047605582931,
    lng: 106.93097537686847
};

const Maps = React.memo(function Maps({ className }) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyB6vcQfhcGf7rTjUbT8B2YeZN88045erXw"
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.3752387788973!2d106.92972010308242!3d47.89042209914912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96932f60f72097%3A0x41008d5a3f86f29!2sSENSE%20OUTDOORS!5e0!3m2!1sen!2shu!4v1701447658281!5m2!1sen!2shu"
            width="600"
            height="450"
            className={`w-full h-120 ${className && className}`}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    );
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
            {map && <Marker position={center} />}
        </GoogleMap>
    ) : (
        <></>
    );
});

export { Maps };
