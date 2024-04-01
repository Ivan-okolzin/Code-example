import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 16,
    marginRight: 2,
  },
  activeText: {
    fontSize: 16,
    color: 'green',
  },
  inactiveText: {
    fontSize: 16,
    color: 'red',
  },
  chart: {
    marginTop: 16,
    height: 200,
    width: '100%',
    borderWidth: 1,
  },
  chartInset: {
    top: 20,
    bottom: 20,
  },
  priceText: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: 'grey',
    width: '40%',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
