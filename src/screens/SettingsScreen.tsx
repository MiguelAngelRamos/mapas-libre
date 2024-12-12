import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { List, Switch } from 'react-native-paper';

const SettingsScreen: React.FC = () => {

  const { showTraffic, setShowTraffic  } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Configuraciones Generales</List.Subheader>
        <List.Item
          title="Mostrar tráffico en tiempo real"
          description= "Habilita o deshabilita la visualizacion del trafico"
          right={() => (
            <Switch
              value={showTraffic}
              onValueChange={() => setShowTraffic(!showTraffic)}
            />
          )}
        >

        </List.Item>
      </List.Section>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  }
});

export default SettingsScreen