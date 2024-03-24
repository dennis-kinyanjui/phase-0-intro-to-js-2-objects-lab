// Write your solution in this file!

let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }


  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }


  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  
  console.log("Original Employee:", employee);

  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated Employee (Non-destructive):", updatedEmployee);

  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Updated Employee (Destructive):", employee);
  

  let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Address (Non-destructive):", employeeWithoutAddress);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name (Destructive):", employee);
  