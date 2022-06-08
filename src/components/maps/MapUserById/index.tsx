import { useCallback, useState } from 'react';
import { Map } from './style';
import { BackButton } from '../../buttons';
import { environments } from 'constants/environments';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface Geolocation {
  lat: number;
  lng: number;
}

export function MapUserById({ lat, lng }: Geolocation) {
  const [, setMap] = useState(null)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: environments.API_KEY_MAP
  })

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);
    setMap(map)
  }, [lat, lng])

  return (
    <Map>
      {isLoaded && !loadError && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat, lng }}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount} >
          <BackButton />
        </GoogleMap>
      )}
    </Map>
  )
}