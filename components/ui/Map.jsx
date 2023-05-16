import React, { useState, useCallback, useEffect } from "react";
import ReactMapGL, {
    NavigationControl,
    Marker,
    Popup,
    FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { v4 as uuidv4 } from "uuid";
import { Navbar, Text, Button, Image } from "@nextui-org/react";
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
function Map({ markers, zoom }) {
    const [viewport, setViewPort] = useState({
        longitude: -66.7399668,
        latitude: 18.2230107,
        zoom: !zoom ? 2.5 : 8,
    });
    const [filtersMarked, setFilterMarked] = useState([]);

    const [schoolMarked, setSchoolMarked] = useState([
        {
            name:'Colegio San Ignacio de Loyola',
            id: uuidv4(),
            
      latitude: 18.377482,
      longitude: -66.087139,
      show: false,
      info: "<p>https://www.sanignacio.pr/admisiones</p>",

        },
        {
            name:'Colegio Marista de Guaynabo',
            id: uuidv4(),
            
      latitude: 18.3809866,
      longitude: -66.1236988,
      show: false,
      info: "",
        },
        {
            name:'Colegio Puertorriqueño de Niñas',
            id: uuidv4(),
      latitude: 18.4065451,
      longitude: -66.0988513,
      show: false,
      info: "",
            
        },
        {
            name :'Colegio San Antonio Abad',
            id: uuidv4(),
      latitude: 18.1436311,
      longitude: -65.8514381,
      show: false,
      info: "",
        },
        {
            name:'Colegio Rosa-Bell',
            id: uuidv4(),
      latitude: 18.3881778,
      longitude: -66.1214808,
      show: false,
      info: "",
        },
        {
            name:'Colegio Adianez',
            id: uuidv4(),
      latitude: 18.3615964,
      longitude: -66.1085951,
      show: false,
      info: "",
        },
        {
            name:'Colegio San Vicente Ferrer',
            id: uuidv4(),
      latitude: 18.441949,
      longitude: -66.0684449,
      show: false,
      info: "",
            
        },
        
        {
            name:'Colegio La Piedad',
            id: uuidv4(),
      latitude: 18.4419479,
      longitude: -66.0864696,
      show: false,
      info: "",
        },
        {
            name:'Colegio San José',
            id: uuidv4(),
      latitude: 18.3957865,
      longitude: -66.0485682,
      show: false,
      info: "",
        },
        {
            name:'Colegio San Ignacio de Loyola - Mayagüez',
            id: uuidv4(),
      latitude: 18.3774025,
      longitude: -66.0888084,
      show: false,
      info: "",
        }   
    ]);

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
            marcadores.map((m) => {
                if (m.id == id) {
                    m.show = state;
                    return m;
                } else return m;
            })
        );
    };

    const addFilterMarker = (value) => {
        if (filtersMarked.find(filter => filter == value)) {
            setFilterMarked(filtersMarked.filter(filter => filter != value))
            setMarcadores(marcadores.filter(marcador => schoolMarked.find(schoolMark => schoolMark == marcador) == true))
        } else {
            setFilterMarked([...filtersMarked, value])
            setMarcadores([...marcadores, ...schoolMarked])
        }
    }
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
                    <Button className={filtersMarked.find(f => f == 'school') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('school')}><SchoolIcon /><Text>School</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'hospital') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('hospital')}><LocalHospitalIcon /><Text>Hospital</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'restaraunt') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('restaraunt')}><RestaurantIcon/><Text>Restaurants</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'groceries') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('groceries')}><LocalGroceryStoreIcon/><Text>Groceries</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'bank') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('bank')}><AccountBalanceIcon/><Text>Bank</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'gym') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('gym')}><FitnessCenterIcon /><Text>Gym</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'police') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('police')}><LocalPoliceIcon/><Text>Police Station</Text></Button>
                    <Button className={filtersMarked.find(f => f == 'bus') ? "button-active" : "button-deactive"} css={{ h: '100%', borderRadius: '0px' }} onPress={() => addFilterMarker('bus')}><DirectionsBusIcon/><Text>Bus Stop</Text></Button>
                </Navbar.Content>

            </Navbar>
        </ReactMapGL>

    );
}
export default Map;