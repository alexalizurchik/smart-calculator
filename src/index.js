class SmartCalculator {
  constructor(initialValue) {
    this.arr = [initialValue];
  }

  add(number) {
    this.arr.push('+');
    this.arr.push(number);
    
    return this;
  }
  
  subtract(number) {
    this.arr.push('-');
    this.arr.push(number);
    
    return this;
  }

  multiply(number) {
    this.arr.push('*');
    this.arr.push(number);
     
    return this;
  }

  devide(number) {
    return this.multiply(1 / number);
  }

  pow(number) {
    this.arr.push('**');
    this.arr.push(number);
    
    return this;
  }
  
  toString() {
    return eval(this.arr.join(''));
  }
}

module.exports = SmartCalculator;
