const stdin = process.openStdin();
let buildSummands = require('./build_summands');
let buildCanonicalForm = require('./build_canonical_form');

// Push all summands into an array of objects
let summands_list = [];

// Identify each summand and build the canonical form
function convertToCanonical(equation) {
  summands_list = buildSummands(equation);
  return buildCanonicalForm(summands_list);
}

console.log('Enter equation:');
stdin.addListener('data', function(d) {
  equation_input = d.toString().trim();
  equation_input = equation_input.split(' ').join('');

  let normalized_eq = convertToCanonical(equation_input);
  console.log('Canonical form:', normalized_eq);
  process.exit();
});
