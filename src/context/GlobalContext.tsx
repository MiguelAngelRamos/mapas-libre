import React, { createContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  trafficData: any;
  fetchTrafficData: (point: string) => void;
  showTraffic: boolean; // Mostrar/ocultar tráfico
  setShowTraffic: (value: boolean) => void; // Actualizar estado del tráfico
}

// Crear el contexto global
export const GlobalContext = createContext<GlobalContextProps>({
  trafficData: null,
  fetchTrafficData: () => {},
  showTraffic: true,
  setShowTraffic: () => {},
});

// Proveedor del contexto global
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [trafficData, setTrafficData] = useState(null);
  const [showTraffic, setShowTraffic] = useState<boolean>(true);

  const fetchTrafficData = async (point: string) => {
    try {
      const response = await fetch(
        `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=uzgvbHsC664lm8QHD12AT&point=${point}`
      );
      const data = await response.json();
      console.log('Traffic Data:', data); // Imprime los datos para inspeccionar
      setTrafficData(data);
    } catch (error) {
      console.error('Error fetching traffic data:', error);
    }
  };
  

  return (
    <GlobalContext.Provider
      value={{
        trafficData,
        fetchTrafficData,
        showTraffic,
        setShowTraffic,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
