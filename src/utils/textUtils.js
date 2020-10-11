export function abbreviatedForm(fullName) {
  return fullName.split(' ').reduce((sum, cur) => (sum += ` ${cur[0]}.`));
}
