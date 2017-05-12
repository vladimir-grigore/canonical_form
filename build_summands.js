var summands_list = [];

function isOperator(operator){
  if(operator === '+' || operator === '-' || operator === '='){
    return true;
  } else {
    return false;
  }
}

function addSummandToList(coefficient, variable, exponent, operator, passEqual){
  let summand = {};
  if(coefficient === '') {
    coefficient = 1.0;
  } else {
    coefficient = parseFloat(coefficient);
  }
  if(exponent === ''){
    exponent = 1;
  }

  // Reverse operators on a minus
  if(operator === '-'){
    coefficient *= -1;
  }

  // Reverse operators if to the right side of equals
  if(passEqual){
    coefficient *= -1;
  }

  // Check if variable already exists in the array and add the coefficients
  let found = summands_list.find(elem => elem.variable === variable && elem.exponent === exponent);
  if(found){
    found.coefficient += coefficient;
  } else {
    // Build summand as an object and push it to the summands_list array
    summand.coefficient = coefficient;
    summand.variable = variable;
    summand.exponent = exponent;
    summands_list.push(summand);
  }
}

// Build each summand and push it to the summands list
module.exports = function buildSummands(equation) {
  let coefficient = '';
  let variable = '';
  let exponent = '';
  let operator = '';
  let bracket_operator = '';
  let passEqual = false;
  let item = '';

  for (let i = 0; i < equation.length; i++){
    item = equation[i];
    // When reaching on operator, construct summand and add it to the list
    // Or set the operator if coefficient, variable and exponent are empty
    if(isOperator(item)){
      if(coefficient !== '' || variable !== '' || exponent !== ''){
        addSummandToList(coefficient, variable, exponent, operator, passEqual);
          coefficient = '';
          variable = '';
          exponent = '';
          operator = '';
      }
      if(item === '='){
        // When passEqual is true, we are left of the equals and all operators are reversed
        passEqual = true;
      } else {
        operator = item;
      }
      continue;
    }

    // Assign the coefficient, variable or exponent
    if(!isNaN(item) || item === '.' && variable === ''){
      coefficient = coefficient + item;
    } else if(isNaN(item) && item !== '^'){
      variable = variable + item;
    } else if(item === '^'){
      i++;
      exponent = equation[i];
    }

  }
  addSummandToList(coefficient, variable, exponent, operator, passEqual);

  // Take out all variables that have coefficient 0
  summands_list = summands_list.filter(elem => elem.coefficient !== 0);
  return summands_list;
}
