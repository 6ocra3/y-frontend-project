import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from "./YandexMap.modules.scss"
export function YandexMap() {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
        controls: [],
    };
    return (
        <YMaps className={s.blackWhite}>
            <Map options={{ copyrightLogoVisible: false, copyrightProvidersVisible: false, yandexMapAutoSwitch: false, copyrightUaVisible: false }} defaultState={defaultState} style={{ filter: "grayscale(1)", width: "800px", height: "600px" }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                <Placemark modules={["geoObject.addon.balloon"]} geometry={[55.684758, 37.738521]} />
            </Map>
        </YMaps>
    );
}

