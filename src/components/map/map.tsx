/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  cloneElement,
  type Dispatch,
  type FC,
  isValidElement,
  type PropsWithChildren,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

interface MapProps extends Exclude<google.maps.MapOptions, "center"> {
  setMap?: Dispatch<SetStateAction<google.maps.Map | undefined>>;
  center?: google.maps.LatLngLiteral;
  onDragStart?: (event: google.maps.FeatureMouseEvent) => void;
}

const MapComponent: FC<PropsWithChildren<MapProps>> = ({
  children,
  center,
  zoom = 12,
  onDragStart,
  mapId,
  setMap: setMapFromProps,
  ...options
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (map && center) {
      map?.setCenter({
        lat: center.lat,
        lng: center.lng,
      });
    }
  }, [center, map]);

  useEffect(() => {
    if (map) {
      map.setOptions({ ...options, zoom, center });
      setMapFromProps?.(map);
      if (onDragStart) {
        map.addListener("dragstart", onDragStart);
      }
    }
  }, [map, center, onDragStart, options, setMapFromProps, zoom]);

  useEffect(() => {
    if (ref.current && !map) {
      const mapContructor = new window.google.maps.Map(ref.current, {
        mapId,
      });
      setMap(mapContructor);
      setMapFromProps?.(mapContructor);
    }
  }, [map, mapId, setMapFromProps]);

  return (
    <>
      <div ref={ref} style={{ flexGrow: "1", height: "100%" }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement<any>(child, { map });
        }
      })}
    </>
  );
};

type MapWrapperProps = {
  mapProps?: MapProps;
};

const MapWrapper: FC<PropsWithChildren<MapWrapperProps>> = ({
  children,
  mapProps,
}) => {
  return (
    <Wrapper
      version="beta"
      libraries={["marker"]}
      apiKey=""
    >
      <MapComponent {...mapProps}>{children}</MapComponent>
    </Wrapper>
  );
};

export default MapWrapper;
