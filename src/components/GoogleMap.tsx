import React from 'react'
import { GoogleMap, MapMarker } from './map'

function GoogleMaps() {
  return (
    <GoogleMap
            mapProps={{
              center: {
                lat: -4.303600,
                lng: 39.579639,
              },
            }}
          >
            <MapMarker
              key={1}
              position={{
                lat: -4.303600,
                lng: 39.579639,
              }}
            />
          </GoogleMap>
  )
}

export default GoogleMaps