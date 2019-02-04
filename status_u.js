let status_u = {
  
  "[0,0,0,0]": "Normal mode: positive weight",
  "[0,0,0,1]": "Test mode: adjust zero counts",
  "[0,0,1,0]": "Calibration mode: adjust SPAN",
  "[0,0,1,1]": "tArE",
  "[0,1,0,0]": "Lo",
  "[0,1,0,1]": "Err",
  "[0,1,1,0]": "ErrL",
  "[0,1,1,1]": "----",
  "[1,1,0,0]": "8888",
  "[1,1,0,1]": "Err",
  "[1,1,1,0]": "Calibration mode: Tare",
  "[1,1,1,1]": "CAL"  

}

exports = module.exports = status_u;