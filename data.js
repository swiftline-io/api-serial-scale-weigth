let _ = require('underscore');
let logger = require('./logging');

function data(S, U, W) {
  
  if( _.isEqual([0, 0, 0, 0], U) ) {
    logger.log({
      level: 'info',
      message: 'Normal mode: positive weight'
    });

    if( _.isEqual([0, 1, 0], S) ) {
      logger.log({
        level: 'info',
        message: 'Weight is in Kg'
      });
      let int = W.slice(0, 3).join('');
      let float = W.slice(3, 5).join('');  
      return {
        'status': "Good",
        'weight': parseInt(int) + '.' + parseInt(float) + ' Kg'
      }
    }

    if( _.isEqual([1, 0, 0], S) ) {
      logger.log({
        level: 'info',
        message: 'Weight is in grams'
      });
      let grams = W.join('');
      return {
        'status': "Good",
        'weight': parseInt(grams  ) + ' g' 
      }
    }

    if( _.isEqual([0, 1, 1], S) ) {
      logger.log({
        level: 'info',
        message: 'Weight is in Lb:oz (dec. oz)'
      });
      let lb = W.slice(0, 2).join('');
      let oz = W.slice(2, 4).join('');
      let float = W.slice(4).join('');
      return {
        'status': "Good",
        'weight': parseInt(lb) + ' lb, ' + parseInt(oz) + '.' + parseInt(float) + ' oz'
      }      
    }

    if( _.isEqual([1, 0, 1], S) ) {
      logger.log({
        level: 'info',
        message: 'Weight is in Lb:oz (fractional)'
      });      
      if( W[4] === 0 ) {        
        logger.log({
          level: 'info',
          message: 'Weight is in Lb:oz'
        });
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return {
          'status': "Good",
          'weight': parseInt(lb) + ' lb, ' + parseInt(oz) + ' oz' 
        } 
      }

      if( W[4] === 1 ) {
        logger.log({
          level: 'info',
          message: 'Weight is in Lb:oz (fractional: 1/4)'
        });
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return {
          'status': "Good",
          'weight': parseInt(lb) + ' lb, ' + parseInt(oz) + '-1/4 oz' 
        }  
      }

      if( W[4] === 2 ) {
        logger.log({
          level: 'info',
          message: 'Weight is in Lb:oz (fractional: 1/2)'
        });
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return {
          'status': "Good",
          'weight': parseInt(lb) + ' lb, ' + parseInt(oz) + '-1/2 oz' 
        }
      }

      if( W[4] === 3 ) {
        logger.log({
          level: 'info',
          message: 'Weight is in Lb:oz (fractional: 3/4)'
        });
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return {
          'status': "Good",
          'weight': parseInt(lb) + ' lb, ' + parseInt(oz) + '-3/4 oz' 
        }
      }
    }
  }
  
  if( _.isEqual([0, 0, 1, 1], U) ) {
    logger.log({
      level: 'info',
      message: 'tArE'
    });
    return {
      'status': "Bad",
      'value': "tArE" 
    }
  }
  
  if( _.isEqual([0, 1, 0, 0], U) ) {
    logger.log({
      level: 'info',
      message: 'Lo (low battery)'
    });
    return {
      'status': "Bad",
      'value': "Lo" 
    }
  }

  if( _.isEqual([0, 1, 0, 1], U) ) {
    logger.log({
      level: 'info',
      message: 'Err (overload)'
    });
    return {
      'status': "Bad",
      'value': "Err" 
    }
  }

  if( _.isEqual([0, 1, 1, 0], U) ) {
    logger.log({
      level: 'info',
      message: 'ErrL (zero counts too low)'
    });
    return {
      'status': "Bad",
      'value': "ErrL" 
    }
  } 

  if( _.isEqual([0, 1, 1, 1], U) ) {
    logger.log({
      level: 'info',
      message: '---- (negative weight, ie < 0.0)'
    });
    return {
      'status': "Bad",
      'value': "----"
    }
  }

  if( _.isEqual([1, 1, 0, 0], U) ) {
    logger.log({
      level: 'info',
      message: '8888'
    });
    return {
      'status': "Bad",
      'value': "8888"
    }
  }

  if( _.isEqual([1, 1, 0, 1], U) ) {
    logger.log({
      level: 'info',
      message: 'Err (tare error)'
    });
    return {
      'status': "Bad",
      'value': "Err"
    }
  }

  if( _.isEqual([1, 1, 1, 1], U) ) {
    logger.log({
      level: 'info',
      message: 'CAL (in calibration mode)'
    });
    return {
      'status': "Bad",
      'value': "CAL"
    }
  }

  if( _.isEqual([0, 0, 0, 1], U) ) {
    logger.log({
      level: 'info',
      message: 'Test mode: adjust zero counts'
    });
    return {
     'status': "Test mode",
     'value': "Adjust zero counts" 
    }
  }

  if( _.isEqual([0, 0, 1, 0], U) ) {
    logger.log({
      level: 'info',
      message: 'Calibration mode: adjust SPAN'
    });
    return {
     'status': "Calibration mode",
     'value': "Adjust SPAN" 
    }
  }

  if( _.isEqual([1, 1, 1, 0], U) ) {
    logger.log({
      level: 'info',
      message: 'Calibration mode: Tare'
    });
    return {
     'status': "Calibration mode",
     'value': "Tare"
    }
  }

}

exports = module.exports = data;