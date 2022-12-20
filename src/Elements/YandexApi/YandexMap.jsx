import React, { useEffect } from 'react';
import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from "./YandexMap.module.scss";
import { COORDS } from './marksCoords';

const AddresCol = ({ setActivePoint, activePoint, theme }) => {
    return (
        <ul className={s.addressList}>
            {COORDS.map(person => {
                return (
                    <li key={person.id} className={s.addresList__address}>
                        <h4 className={s.address__name}>{person.owner.name}</h4>
                        <ul className={theme == 'light' ? s.address__points + " " + s.address__points_light : s.address__point}>
                            {person.points.map(point => <li key={point.id} onClick={() => setActivePoint(point)} className={activePoint == point ? s.address__point + " " + s.address__point_active : s.address__point}>{point.title}</li>)}
                        </ul>
                    </li>)
            })}
        </ul>)

}

export function YandexMap({ theme }) {
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
        <section className={s.devMap}>
            <YMaps className={s.blackWhite}>
                <Map instanceRef={(ref) => {
                    if (ref) { mapRef.current = ref; }
                }} options={{ copyrightLogoVisible: false, copyrightProvidersVisible: false, yandexMapAutoSwitch: false, copyrightUaVisible: false }} defaultState={defaultState} style={{ filter: "grayscale(1)", width: "800px", height: "600px" }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                    {onlyCoords.map(coord => <Placemark key={coord.id} geometry={coord.coordinates} options={{ iconLayout: "default#image", iconImageHref: coord == activePoint ? "activeMark.svg" : "mark.svg", iconImageSize: coord == activePoint ? [30, 30] : [20, 20] }} />)}
                </Map>
            </YMaps>
            <AddresCol theme={theme} activePoint={activePoint} setActivePoint={setActivePoint} />
        </section>
    );
}


