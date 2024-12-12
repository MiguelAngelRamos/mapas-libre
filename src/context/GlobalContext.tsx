import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useState } from 'react';

interface GlobalContextProps {
  trafficData: any;
  fetchTrafficFata: (point: string) => void;
  showTraffic: boolean;
  setShowTraffic: (value: boolean) => void
}

// crearamos el contexto global

export const GlobalContext = createContext<GlobalContextProps>({
  trafficData: null,
  fetchTrafficFata: () => {},
  showTraffic: true,
  setShowTraffic: () => {}
})

const GlobalContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [trafficData, setTrafficData] = useState(null);
    const [showTraffic, setShowTraffic] = useState<boolean>(true);

    const fetchTrafficFata = async (point: string ) => {
      try {
        const response = await fetch(`https:/api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=aquivatuapikey`);

        const data = await response.json();
        console.log('Traffic Data: ', data);
        setShowTraffic(data);
      } catch (error) {
        console.error("Error fetching traffic data", error);
      }
    }
  return (
    <GlobalContext.Provider 
      value={{
        trafficData,
        fetchTrafficFata,
        showTraffic,
        setShowTraffic
      }}
    >
     {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;