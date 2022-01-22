import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageManager = function() {
  this.bestScoreKey = 'bestScore';
  this.bestScoreKey = 'bestScore';
  this.gameStateKey = 'gameState';
}

LocalStorageManager.prototype.getItem = async (options) => {
  const { key, error, success } = options;
  await AsyncStorage.getItem(key, (err, res) => {
    if(err) error(err);
    else success(res);
  });
}
LocalStorageManager.prototype.setItem = async (options) => {
  const { key, value, error, success } = options;
  if(value.length < 5) {
    await AsyncStorage.setItem(key, value, (err, res) => {
      if(err) error(err);
      else success(res);
    });
  }
}
LocalStorageManager.prototype.removeItem = async (options) => {
  const { key, error, success } = options;
  await AsyncStorage.removeItem(key, (err, res) => {
    if(error) error(err);
    else success(res);
  });
}

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function(cb) {
  const callback = cb ? cb : () => {};
  this.getItem({
    key: this.bestScoreKey,
    success: (res) => {
      callback(res ? parseInt(res) : 0);
    },
    error: (err) => {
      console.log(err);
    }
  });
};
LocalStorageManager.prototype.setBestScore = function(score, cb) {
  const callback = cb ? cb : () => {};
  this.setItem({
    key: this.bestScoreKey,
    value: score.toString(),
    success: callback,
    error: function(err) {
      console.log(err);
    }
   });
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function(callback) {
  return this.getItem({
    key: this.gameStateKey,
    success: function(res) {
      const state = res ? JSON.parse(res) : null
      callback(state);
    },
    error: function(err) {
      console.log(err);
    }
  })
};

LocalStorageManager.prototype.setGameState = function(gameState,cb) {
  const callback = cb ? cb : () => {};
  const json = gameState ? JSON.stringify(gameState) : null;
  this.setItem({
    key: this.gameStateKey,
    value: json,
    success: callback,
    error: (err) => {
      console.log(err);
    }
   });
};
LocalStorageManager.prototype.clearGameState = function(cb) {
  const callback = cb ? cb : () => {};
  this.removeItem({
    key: this.gameStateKey,
    success: callback,
    error: (err) => {
      console.log(err);
    }
  });
};

export default LocalStorageManager
