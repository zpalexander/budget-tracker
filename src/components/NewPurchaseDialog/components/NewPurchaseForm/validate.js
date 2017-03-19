export default function validate(values) {
  const errors = {};
  let { name, amount } = values;
  amount = parseFloat(amount);
  if (!name) {
    errors.name = 'Required';
  }
  if (!amount) {
    errors.amount = 'Required';
  }

  return errors;
}
