import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapLibreGL from '@maplibre/maplibre-react-native'
import { GlobalContext } from '../context/GlobalContext';

MapLibreGL.setAccessToken(null); // no necesita token es totalmente libre

const TrafficScreen = () => {
  const {trafficData, fetchTrafficFata} = useContext(GlobalContext);

  useEffect(() => {
    fetchTrafficFata('-33.390162, -70.622351');
  }, []);

  
  return (
    <View>
      <Text>TrafficScreen</Text>
    </View>
  )
}

export default TrafficScreen