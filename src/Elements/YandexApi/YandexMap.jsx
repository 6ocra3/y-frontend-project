import React, { useEffect } from 'react';
import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from "./YandexMap.modules.scss"
import { COORDS } from './marksCoords';

const AddresCol = ({ activePoint, setActivePoint }) => {
    return (
        <ul>
            {COORDS.map(person => {
                return (
                    <li key={person.id}>
                        <h4>{person.owner.name}</h4>
                        <ul>
                            {person.points.map(point => <li key={point.id} onClick={() => setActivePoint(point)}>{point.title}</li>)}
                        </ul>
                    </li>)
            })}
        </ul>)

}

export function YandexMap() {
    const [activePoint, setActivePoint] = useState(COORDS[0].points[0])
    const onlyCoords = COORDS.reduce((pre, cur) => pre.concat(cur.points), [])
    const mapRef = {}
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setCenter(activePoint.coordinates)
        }
    }, [activePoint])
    const defaultState = {
        center: activePoint.coordinates,
        zoom: activePoint.zoom || 6,
        controls: [],
    };
    return (
        <section>
            <YMaps className={s.blackWhite}>
                <Map instanceRef={(ref) => {
                    if (ref) { mapRef.current = ref; }
                }} options={{ copyrightLogoVisible: false, copyrightProvidersVisible: false, yandexMapAutoSwitch: false, copyrightUaVisible: false }} defaultState={defaultState} style={{ filter: "grayscale(1)", width: "800px", height: "600px" }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                    {onlyCoords.map(coord => <Placemark key={coord.id} geometry={coord.coordinates} options={{ iconLayout: "default#image", iconImageHref: coord == activePoint ? "https://cdn-icons-png.flaticon.com/512/2711/2711637.png" : "https://cdn-icons-png.flaticon.com/512/1008/1008001.png", iconImageSize: coord == activePoint ? [30, 30] : [20, 20] }} />)}
                </Map>
            </YMaps>
            <AddresCol activePoint={activePoint} setActivePoint={setActivePoint} />
        </section>
    );
}


