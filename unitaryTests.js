let chai = require('chai');
let expect = chai.expect;
let data = require('./data');

describe('getDataFunction', () => {

  // Test displaying positive weight
  // Weight in Kg 
  it('Should be 2.10 Kg', () => {
    let result = data([0, 1, 0], [0, 0, 0, 0], [0, 0, 2, 1, 0]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "2.10 Kg" 
    });
  });

  // Weight in grams
  it('Should be 123 g', () => {
    let result = data([1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 2, 3]);    
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "123 g" 
    });
  });

  // Weight in Lb:oz
  it('Should be 3 lb, 12.3 oz', () => {
    let result = data([0, 1, 1], [0, 0, 0, 0], [0, 3, 1, 2, 3]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "3 lb, 12.3 oz"
    });
  });

  // Weight in Lb:oz fractional
  // 1
  it('Should be 1 lb, 3 oz', () => {
    let result = data([1, 0, 1], [0, 0, 0, 0], [0, 1, 0, 3, 0]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "1 lb, 3 oz"
    });
  });

  // 2
  it('Should be 0 lb, 6-1/4 oz', () => {
    let result = data([1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 6, 1]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "0 lb, 6-1/4 oz"
    });
  });

  // 3
  it('Shloud be 2 lb, 11-1/2 oz', () => {
    let result = data([1, 0, 1], [0, 0, 0, 0], [0, 2, 1, 1, 2]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "2 lb, 11-1/2 oz"
    });
  });

  // 3
  it('Should be 11 lb, 10-3/4 oz', () => {
    let result = data([1, 0, 1], [0, 0, 0, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Good",
      'weight': "11 lb, 10-3/4 oz"
    });
  });

  // Test Display errors and status mode
  // 1
  it('Should Displaying: "tArE" ', () => {
    let result = data([1, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "tArE"
    });
  });

  // 2
  it('Should Displaying: "Lo" ', () => {
    let result = data([1, 0, 1], [0, 1, 0, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "Lo"
    });
  });

  // 3
  it('Should Displaying: "Err" ', () => {
    let result = data([1, 0, 1], [0, 1, 0, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "Err"
    });
  });

  // 4
  it('Should Displaying: "ErrL" ', () => {
    let result = data([1, 0, 1], [0, 1, 1, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "ErrL"
    });
  });

  // 5
  it('Should Displaying: "----" ', () => {
    let result = data([1, 0, 1], [0, 1, 1, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "----"
    });
  });

  // 6
  it('Should Displaying: "8888" ', () => {
    let result = data([1, 0, 1], [1, 1, 0, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "8888"
    });
  });

  // 7
  it('Should Displaying: "Err" ', () => {
    let result = data([1, 0, 1], [1, 1, 0, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "Err"
    });
  });

  // 8
  it('Should Displaying: "CAL" ', () => {
    let result = data([1, 0, 1], [1, 1, 1, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Bad",
      'value': "CAL"
    });
  });

  // 9
  it('Must be on in Test mode: adjust zero counts', () => {
    let result = data([1, 0, 1], [0, 0, 0, 1], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Test mode",
      'value': "Adjust zero counts"
    });
  });

  // 10
  it('Must be on in Calibration mode: adjust SPAN', () => {
    let result = data([1, 0, 1], [0, 0, 1, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Calibration mode",
      'value': "Adjust SPAN"
    });
  });

  // 11
  it('Must be on in Calibration mode: Tare', () => {
    let result = data([1, 0, 1], [1, 1, 1, 0], [1, 1, 1, 0, 3]);
    expect(result).to.deep.equal({
      'status': "Calibration mode",
      'value': "Tare"
    });
  });

});