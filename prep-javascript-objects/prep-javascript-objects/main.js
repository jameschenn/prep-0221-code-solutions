var person = {
  firstName: 'James',
  lastName: 'Chen',
  hobby: 'eating'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName + '.');

person.job = 'Pharmacy Technician';

console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Cashier';

console.log("The person's previous job is:" + person.previousJob + '.');

console.log('The complete person object:', person);

var myCar = {
  make: 'Mazda',
  model: '3',
  year: '2019'
};

console.log('My Car info:', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'silver';

console.log('My full car info', myCar);
