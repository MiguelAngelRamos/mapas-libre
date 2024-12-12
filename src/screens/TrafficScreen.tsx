import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapLibreGL from '@maplibre/maplibre-react-native'
import { GlobalContext } from '../context/GlobalContext';
import { FeatureCollection, LineString } from 'geojson';

MapLibreGL.setAccessToken(null); // no necesita token es totalmente libre

const TrafficScreen = () => {
  const {trafficData, fetchTrafficFata} = useContext(GlobalContext);

  useEffect(() => {
    fetchTrafficFata('-33.390162, -70.622351'); // Obtener trafico con estas coordenadas
  }, []);

  const getTrafficGeoJSON = ():FeatureCollection<LineString> | null => {
    if (!trafficData?.flowSegmentData?.coordinates) return null; 
    const coordinates = trafficData.flowSegmentData.coordinates.coordinate.map((coord: {longitude: number; latitude: number}) => [coord.longitude, coord.latitude]);

    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: { type: 'LineString', coordinates},
          properties: {}
        }
      ]
    }
  };

  const trafficGeoJSON = getTrafficGeoJSON();
  return (
    <View style={styles.container}>
      <MapLibreGL.MapView
        style={styles.map}
        styleURL="https://demotiles.maplibre.org/style.json"
      >
        <MapLibreGL.Camera zoomLevel={12} centerCoordinate={[-70.16265, -20.23070]} />
        {trafficGeoJSON && (
          <MapLibreGL.ShapeSource id="traffic" shape={trafficGeoJSON}>
            <MapLibreGL.LineLayer
              id="trafficLayer"
              style={{
                lineColor: 'red',
                lineWidth: 5,
              }}
            />
          </MapLibreGL.ShapeSource>
        )}
      </MapLibreGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

export default TrafficScreen