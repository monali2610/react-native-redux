import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    marginBottom: 40
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10
  },
  title: {
    color: 'black',
    fontSize: 15,
  },
  subTitle: {
    color: 'grey',
    fontSize: 12,
  },
  column: {
    marginLeft: 10,
    flexDirection: 'column'
  }
})