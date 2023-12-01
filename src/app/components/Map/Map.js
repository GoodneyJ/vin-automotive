'use client'
import React, {useEffect, useRef} from 'react'
import {Loader} from '@googlemaps/js-api-loader'
export default function Map() {

    const mapRef = React.useRef(null)

    useEffect(() => {
        const initMap = async () => {


            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly',
            })

            const { Map } = await loader.importLibrary('maps');

            const {Marker} = await loader.importLibrary('marker');

            const position = {
                lat: 39.113331,
                lng: -76.83553
            }

            // map options
            const mapOptions = google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: '337c211febce61be'
            }


            //Setup the map
            const map = new Map(mapRef.current, mapOptions);

            // put up a marker
            const marker = new Marker ({
                map: map,
                position: position
            });
        }

        initMap()
    }, [])
  return (
    <div style={{ height: '600px'}} ref={mapRef}>
    </div>
  )
}
