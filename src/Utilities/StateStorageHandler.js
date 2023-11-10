
class StateStorageHandler {
  
  static async storeData(key, value) {
    try {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
      console.log('Data:' + stringifiedValue + ' stored successfully under key name: ' + key);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  static async retrieveData(key) {
    try {
      var value = localStorage.getItem(key);
      if (value !== null) {
      //  const data = JSON.parse(value);
     //   console.log('Retrieved Data in funct: '+ value);
        return value;
      } else {
        console.log('Data not found');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }


  static async removeData(key) {
    try {
      localStorage.removeItem(key);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }
}

export default StateStorageHandler;
