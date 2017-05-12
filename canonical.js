const stdin = process.openStdin();
var buildSummands = require('./build_summands');

// Push all summands into an array of objects
var summands_list = [];

function convertToCanonical(equation) {
  summands_list = buildSummands(equation);
  console.log("Summands list:", summands_list);
  return buildCanonicalForm(summands_list);
}

console.log("Enter equation:")
stdin.addListener("data", function(d) {
  equation_input = d.toString().trim();
  equation_input = equation_input.split(' ').join('');

  let normalized_eq = convertToCanonical(equation_input);
  console.log("Canonical form:", normalized_eq);
});
