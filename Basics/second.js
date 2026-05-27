const mark = {
  fullName:`mark miller`,
  mass:78,
  height:1.69,

   calcBMI:function(){
    const bmi= this.bmi=(this.mass/this.height**2);
    return this.bmi;
  }
};
const john = {
  fullName:`john smith`,
  mass:92,
  height:1.95,

   calcBMI:function(){
    const bmi= this.bmi=(this.mass/this.height**2);
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi,john.bmi);