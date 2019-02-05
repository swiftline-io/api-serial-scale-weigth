let _ = require('underscore');
let scale = require('./example');

let status_s = scale.status.lb1.slice(1, 4);
let status_u = scale.status.lb1.slice(4, 8);
let weigth = scale.weigth;

data(status_s, status_u, weigth);

function data( S, U, W) {

  if( _.isEqual([0, 0, 0, 0], U) ) {

    if( _.isEqual([0, 1, 0], S) ) {
      let int = W.slice(0, 3).join('');
      let float = W.slice(3, 5).join('');  
      return result = {
        'status': "Good",
        'weigth': parseInt(int) + '.' + parseInt(float) + ' Kg'
      };
    }
  
    if( _.isEqual([1, 0, 0], S) ) {
      return result = {
        'status': "Good",
        'weigth': parseInt(W.join('')) + ' g' 
      };
    }

    if( _.isEqual([0, 1, 1], S) ) {
      let lb = W.slice(0, 2).join('');
      let oz = W.slice(3, 5).join('');
      let float = W.slice(4).join('');
      return result = {
        'status': "Good",
        'weigth': parseInt(lb) + ' lb, ' + parseInt(oz) + '.' + parseInt(float) + ' oz'
      };
    }

    if( _.isEqual([1, 0, 1], S) ) {
      
      if( c[4] === 0 ) {
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return result = {
          'status': "Good",
          'weigth': parseInt(lb) + ' lb, ' + parseInt(oz) + ' oz' 
        };
      }

      if( c[4] === 1 ) {
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return result = {
          'status': "Good",
          'weigth': parseInt(lb) + ' lb, ' + parseInt(oz) + '-1/4 oz' 
        };
      }

      if( c[4] === 2 ) {
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return result = {
          'status': "Good",
          'weigth': parseInt(lb) + ' lb, ' + parseInt(oz) + '-1/2 oz' 
        };
      }

      if( c[4] === 3 ) {
        let lb = W.slice(0, 2).join('');
        let oz = W.slice(2, 4).join('');
        return result = {
          'status': "Good",
          'weigth': parseInt(lb) + ' lb, ' + parseInt(oz) + '-1/3 oz' 
        };
      }
    }
  }
  
  if( _.isEqual([0, 0, 1, 1], U) ) {
    return result = {
      'status': "Bad",
      'value': "tArE" 
    };
  }
  if( _.isEqual([0, 1, 0, 0], U) ) {
    return result = {
      'status': "Bad",
      'value': "Lo" 
    };
  }
  if( _.isEqual([0, 1, 0, 1], U) ) {
    return result = {
      'status': "Bad",
      'value': "Err" 
    };
  }
  if( _.isEqual([0, 1, 1, 0], U) ) {
    return result = {
      'status': "Bad",
      'value': "ErrL" 
    };
  } 
  if( _.isEqual([0, 1, 1, 1], U) ) {
    return result = {
      'status': "Bad",
      'value': "----"
    };
  }
  if( _.isEqual([1, 1, 0, 0], U) ) {
    return result = {
      'status': "Bad",
      'value': "8888"
    };
  }
  if( _.isEqual([1, 1, 0, 1], U) ) {
    return result = {
      'status': "Bad",
      'value': "Err"
    };
  }
  if( _.isEqual([1, 1, 1, 1], U) ) {
    return result = {
      'status': "Bad",
      'value': "CAL"
    };
  }

}

exports = module.exports = result;