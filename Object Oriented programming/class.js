import promptSync from "prompt-sync";
const prompt = promptSync();

class SchoolForm {
    FormDetail(demoData) {
        // Use demoData if provided, otherwise prompt user
        const name = demoData?.name ?? "Demo Student";
        const rollNumber = demoData?.rollNumber ?? "101";
        const standard = demoData?.standard ?? "10";
        const phoneNumber = demoData?.phoneNumber ?? "9876543210";
        const section = demoData?.section ?? "A";
        const selection = demoData?.selection ?? 1;
        console.log(
            `Your Name is: ${name}\nYour Roll No. is: ${rollNumber}\nYour Standard is: ${standard}\nYour Phone no. is: ${phoneNumber}\nYour Section is: ${section}`
        );
        return { name, rollNumber, standard, phoneNumber, section, selection };
    }

    submitForm(name, rollNumber, standard, phoneNumber, section, selection) {
        if (name && rollNumber && standard && phoneNumber && section && selection === 1) {
            console.log("Form Submitted!");
        } else if (selection === 2) {
            this.cancelAdmission();
        } else {
            console.log("Form submission failed: Missing details.");
        }
    }

    cancelAdmission() {
        console.log("Admission Revoked!!");
    }
}

const student1 = new SchoolForm();
const student2 = new SchoolForm();

// Demo details for testing
const student1Details = student1.FormDetail({
    name: "Alice",
    rollNumber: "201",
    standard: "12",
    phoneNumber: "9123456789",
    section: "B",
    selection: 1 // Submit
});
student1.submitForm(
    student1Details.name,
    student1Details.rollNumber,
    student1Details.standard,
    student1Details.phoneNumber,
    student1Details.section,
    student1Details.selection
);

const student2Details = {
    name: "Bob",
    rollNumber: "202",
    standard: "11",
    phoneNumber: "9988776655",
    section: "C",
    selection: 2 // Cancel
};
student2.FormDetail(student2Details);

student2.submitForm(
    student2Details.name,
    student2Details.rollNumber,
    student2Details.standard,
    student2Details.phoneNumber,
    student2Details.section,
    student2Details.selection
);

