//  Example 01
const result = [
  { subject: "Bangla", mark: 75 },
  { subject: "English", mark: 85 },
  { subject: "Math", mark: 90 },
];

const output = result.reduce(
  (acc, value) => ({
    ...acc,
    [value.subject]: value.mark,
  }),
  {}
);

console.log(output); // {Bangla: 75, English: 75, Math: 75}
