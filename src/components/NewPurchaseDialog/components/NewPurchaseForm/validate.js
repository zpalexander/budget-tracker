export default function validate(values) {
  const errors = {};
  let { name, amount } = values;
  amount = parseFloat(amount);
  if (!name) {
    errors.name = 'Required';
  }
  if (!amount || isNaN(amount)) {
    errors.amount = 'Must be a number';
  }

  return errors;
}
