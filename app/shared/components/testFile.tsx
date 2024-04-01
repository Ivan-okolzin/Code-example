import React, {useState, useCallback} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import WebSocketService from '../utils/webSocketService';
import styles from '../styles/styles';

export default function MainScreen() {
  const [priceData, setPriceData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPriceUpdate = useCallback(newPrice => {
    setPriceData(currentData => [...currentData, newPrice]);
  }, []);

  const {disconnect, connect} = WebSocketService({onPriceUpdate});

  const handleConnect = async () => {
    if (isConnected || isLoading) {
      Alert.alert('Connection in progress or already established');
      return;
    }
    setIsLoading(true);
    try {
      const connectionStatus = await connect();
      setIsConnected(connectionStatus);
    } catch (e) {
      console.error('Connection failed', e);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    const connectionStatus = disconnect();
    setIsConnected(connectionStatus);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Connection Status:</Text>
        <Text style={isConnected ? styles.activeText : styles.inactiveText}>
          {isConnected ? 'Active' : 'Inactive'}
        </Text>
      </View>
      <LineChart
        style={styles.chart}
        data={priceData}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={styles.chartInset}
      />
      <Text style={styles.priceText}>
        Latest Price: {priceData[priceData.length - 1]}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleConnect} style={styles.button}>
          <Text style={styles.buttonText}>
            {isLoading ? 'Loading' : 'Connect'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDisconnect} style={styles.button}>
          <Text style={styles.buttonText}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
