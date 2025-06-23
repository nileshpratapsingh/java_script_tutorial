

class SchoolForm {


    constructor(name, rollNumber, selection) {
        console.log(`constructor called....for ${name} ${rollNumber} ${selection}`);
        this.name = name;
        this.rollNumber = rollNumber;
        this.selection = selection;
    }

    FormDetail(demoData) {

        const name = demoData?.name ;
        const rollNumber = demoData?.rollNumber ;
        const standard = demoData?.standard ;
        const phoneNumber = demoData?.phoneNumber ;
        const section = demoData?.section ;
        const selection = demoData?.selection ;
        console.log(
            `Your Name is: ${name}\nYour Roll No. is: ${rollNumber}\nYour Standard is: ${standard}\nYour Phone no. is: ${phoneNumber}\nYour Section is: ${section}`
        );
        // Optionally, update instance properties
        this.name = name;
        this.rollNumber = rollNumber;
        this.standard = standard;
        this.phoneNumber = phoneNumber;
        this.section = section;
        this.selection = selection;
        return { name, rollNumber, standard, phoneNumber, section, selection };
    }

    submitForm() {
        if (
            this.name &&
            this.rollNumber &&
            this.standard &&
            this.phoneNumber &&
            this.section &&
            this.selection === 1
        ) {
            console.log("Form Submitted!");
        } else if (this.selection === 2) {
            this.cancelAdmission();
        } else {
            console.log("Form submission failed: Missing details.");
        }
    }

    cancelAdmission() {
        console.log("Admission Revoked!!");
    }
}

// Example usage:
const student1 = new SchoolForm("Alice", "201", 1);
student1.FormDetail({
    name: "Alice",
    rollNumber: "201",
    standard: "12",
    phoneNumber: "9123456789",
    section: "B",
    selection: 1 // Submit
});
student1.submitForm();

// Uncomment to test student2

const student2 = new SchoolForm("Bob", "202", 2);
student2.FormDetail({
    name: "Bob",
    rollNumber: "202",
    standard: "11",
    phoneNumber: "9988776655",
    section: "C",
    selection: 2 
});
student2.submitForm();

