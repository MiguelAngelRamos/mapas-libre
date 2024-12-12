import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Color principal (usado en botones, enlaces, etc.)
    accent: '#03dac4',  // Color de acento (para botones secundarios, etc.)
    background: '#f6f6f6', // Fondo de la aplicación
    surface: '#ffffff',    // Fondo de elementos (como tarjetas)
    text: '#000000',       // Color del texto
    error: '#B00020',      // Color para mensajes de error
    notification: '#f50057', // Color para notificaciones
  },
  roundness: 8, // Redondeo predeterminado para elementos como botones
};