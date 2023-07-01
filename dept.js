const CSPIT = {
    yearOfEstablishment: 2000,
    location: "Changa, Anand, Gujarat, India",
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    getDetails: function() {
      console.log("Year of Establishment:", this.yearOfEstablishment);
      console.log("Location:", this.location);
      console.log("Departments:");
      for (const department of this.departments) {
        console.log(department);
      }
    }
  };
  
  CSPIT.CE = Object.create(CSPIT);
  CSPIT.CE.totalStudents = 180;
  CSPIT.CE.totalFaculty = 30;
  
  console.log("CSPIT Details:");
  for (const i in CSPIT) {
    if (typeof CSPIT[i] !== "function") {
      console.log(i + ":", CSPIT[i]);
    }
  }
  
  console.log("\nCE Department Details:");
  for (const i in CSPIT.CE) {
    if (typeof CSPIT.CE[i] !== "function") {
      console.log(i + ":", CSPIT.CE[i]);
    }
  }
  