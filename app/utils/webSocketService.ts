import {useState} from 'react';

const WebSocketService = ({onPriceUpdate}) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  const connect = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const ws = new WebSocket('wss://stream.binance.com:443/ws/bnbusdt');

      ws.onopen = () => {
        try {
          ws.send(
            JSON.stringify({
              method: 'SUBSCRIBE',
              params: ['btcusdt@aggTrade'],
              id: 1,
            }),
          );
          resolve(true);
        } catch (e) {
          console.error('Cannot connect', e);
          reject(e);
        }
      };

      ws.onmessage = e => {
        const data = JSON.parse(e.data);
        if (data && data.p) {
          onPriceUpdate(parseFloat(data.p));
        }
      };

      ws.onerror = e => {
        console.error('WebSocket Error: ', e);
        reject(e);
      };

      ws.onclose = e => {
        console.log('WebSocket Disconnected: ', e.code, e.reason);
      };

      setWebSocket(ws);
    });
  };

  const disconnect = () => {
    if (webSocket) {
      webSocket.close();
      return false;
    }
    return true;
  };

  return {connect, disconnect};
};

export default WebSocketService;
