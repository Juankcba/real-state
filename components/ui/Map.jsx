import React, { useState, useCallback, useEffect } from "react";
import ReactMapGL, {
    NavigationControl,
    Marker,
    Popup,
    FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Navbar, Text, Button, Image } from "@nextui-org/react";

function Map({ markers, zoom }) {
    const [viewport, setViewPort] = useState({
        longitude: -66.7399668,
        latitude: 18.2230107,
        zoom: !zoom ? 2.5 : 8,
    });

    const [marcadores, setMarcadores] = useState([]);

    const onMove = useCallback((evt) => {
        setViewPort(evt.viewState);
    }, []);

    useEffect(() => {
        if (markers && markers.length > 0) {
            setMarcadores(markers);
        }
    }, [markers]);
    useEffect(() => {
        if (zoom) {
            setViewPort({
                longitude: markers[0].longitude,
                latitude: markers[0].latitude,
                zoom: 8,
            });
        } else {
            setViewPort({
                longitude: -66.7399668,
                latitude: 18.2230107,
                zoom: 8,
            });
        }
    }, [zoom, markers]);

    zoom;

    const setShowPopup = (id, state) => {
        console.log(id, state);
        setMarcadores(
            markers.map((m) => {
                if (m.id == id) {
                    m.show = state;
                    return m;
                } else return m;
            })
        );
    };
    return (

        <ReactMapGL
            mapStyle={"mapbox://styles/mapbox/streets-v11"}
            mapboxAccessToken={process.env.NEXT_PUBLIC_TOKEN_MAP}
            {...viewport}
            width={"100%"}
            height={"100%"}
            onMove={onMove}
        >
            {marcadores.map((m) => (
                <>
                    <Marker
                        key={m.id}
                        longitude={m.longitude}
                        latitude={m.latitude}
                        anchor="bottom"
                        onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            setShowPopup(m.id, true);
                        }}
                    ></Marker>
                    {m.show && (
                        <Popup
                            longitude={m.longitude}
                            latitude={m.latitude}
                            anchor="bottom"
                            onClose={() => setShowPopup(m.id, false)}
                        >
                            <Text h2 size={"$md"}>
                                {m.name}
                            </Text>
                            <div dangerouslySetInnerHTML={{ __html: m.info }}></div>
                        </Popup>
                    )}
                </>
            ))}
            <Navbar className="custom-map-container" isBordered variant={'sticky'} style={{ padding: '0px !important' }} css={{ bottom: 0, top: '556px', h: '74px', pr: 0, pl: 0 }}>

                <Navbar.Content css={{ w: '100%', p: 0, display: 'flex', flexDirection: 'row', gap: '0px', justifyContent: 'space-between' }}>
                    <Button className="button-active" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/school.svg'} alt="school-icon" /><Text>School</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/hospital.svg'} alt="hospital-icon" /><Text>Hospital</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/restaraunt.svg'} alt="restaraunt-icon" /><Text>Restaurants</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/bank.svg'} alt="bank-icon" /><Text>Bank</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/gym.svg'} alt="gym-icon" /><Text>Gym</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/police.svg'} alt="police-icon" /><Text>Police Station</Text></Button>
                    <Button className="button-deactive" auto css={{ h: '100%', borderRadius: '0px' }}><Image src={'/assets/icons/bus.svg'} alt="bus-icon" /><Text>Bus Stop</Text></Button>
                </Navbar.Content>

            </Navbar>
        </ReactMapGL>

    );
}
export default Map;