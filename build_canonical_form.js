module.exports = function buildCanonicalForm(summands_list){
  let canonical_form = '';

  // Sort the summands by exponent
  summands_list = summands_list.sort((a, b) => {
    if(a.exponent < b.exponent) return 1;
    if(a.exponent > b.exponent) return -1;
  });

  for(let summand of summands_list){

    if(canonical_form.length > 0){
      canonical_form += ' ';
    }

    // Add operator and coefficient for each variable
    if(summand.coefficient >= 0){
      if(canonical_form.length > 0){
        canonical_form += '+ ';
      }
      if(summand.variable === ''){
        canonical_form += summand.coefficient;
      } else {
        if(summand.coefficient > 1){
          canonical_form += summand.coefficient;
        }
      }
    } else if(summand.coefficient < 0){
      if(canonical_form.length > 0){
        canonical_form += '- ';
      } else {
        canonical_form += '-';
      }
      if(summand.variable === ''){
        summand.coefficient *= -1;
        canonical_form += summand.coefficient;
      } else {
        if(summand.coefficient < -1){
          summand.coefficient *= -1;
          canonical_form += summand.coefficient;
        }
      }

    }

    // Add variable if it exists
    if(summand.variable !== ''){
      canonical_form += summand.variable;
    }

    // Add exponent if bigger than 1
    if(summand.exponent > 1){
      canonical_form += '^';
      canonical_form += summand.exponent;
    }
  }

  if(canonical_form === ''){
    canonical_form = '0';
  }
  canonical_form += ' = 0';
  return canonical_form;
}
