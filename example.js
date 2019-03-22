let scale =  {
  'status': {                               // Data 
    //                 Status S                        
    'kg': [1, 0, 1, 0, 0, 0, 0, 0],    // Print weight in Kg
    'g': [1, 1, 0, 0, 0, 0, 0, 0],     // Print weight in g
    'lb1': [1, 0, 1, 1, 0, 0, 0, 0],   // Print weight in lb:oz (dec. oz)
    'lb2': [1, 1, 0, 1, 0, 0, 0, 0],   // Print weight in lb:oz (fractional)

     //                Status U
    'disp1': [1, 0, 1, 0, 0, 0, 1, 1],   // Print Message: Displaying: "tArE" 
    'disp2': [1, 0, 1, 0, 0, 1, 0, 0],   // Print Message: Displaying: "Lo" 
    'disp3': [1, 0, 1, 0, 0, 1, 0, 1],   // Print Message: Displaying: "Err" 
    'disp4': [1, 0, 1, 0, 0, 1, 1, 0],   // Print Message: Displaying: "ErrL" 
    'disp5': [1, 0, 1, 0, 0, 1, 1, 1],   // Print Message: Displaying: "----"  
    'disp6': [1, 0, 1, 0, 1, 1, 0, 0],   // Print Message: Displaying: "8888" 
    'disp7': [1, 0, 1, 0, 1, 1, 0, 1],   // Print Message: Displaying: "Err" 
    'disp8': [1, 0, 1, 0, 1, 1, 1, 1],   // Print Message: Displaying: "CAL" 
    'disp9': [1, 0, 1, 0, 0, 0, 0, 1],   // Print Message: Test mode: adjust zero counts
    'disp10': [1, 0, 1, 0, 0, 0, 1, 0],   // Print Message: Calibration mode: adjust SPAN
    'disp11': [1, 0, 1, 0, 1, 1, 1, 0],   // Print Message: Calibration mode: Tare
  },
  'weight': [1, 1, 1, 0, 3]
}

exports = module.exports = scale;