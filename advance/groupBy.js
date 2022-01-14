console.log("Group By Methd");

// Example 01
const employees = [
  { name: "Hasan", department: "Frontend Development" },
  { name: "Jone Doe", department: "Backend Development" },
  { name: "Jone", department: "Frontend Development" },
];

const groupByDepartment = employees.groupBy((employee) => {
  return employee?.department;
});

console.log(groupByDepartment);
