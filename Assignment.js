JavaScript program that addresses some common functionality, let's build a simple application that tracks assignments for students. This program will allow users to:

1. Add assignments.
2. Mark assignments as completed.
3. Display all assignments.
4. Track the status of assignments (completed or pending).

JavaScript Code for Managing Assignments

```javascript
// Assignment manager class to manage all assignment operations
class AssignmentManager {
  constructor() {
    this.assignments = [];
  }

  // Method to add new assignments
  addAssignment(title, description) {
    const newAssignment = {
      id: this.assignments.length + 1,
      title: title,
      description: description,
      status: 'pending' // Default status is pending
    };
    this.assignments.push(newAssignment);
    console.log(`New assignment added: title`);
  

  // Method to mark an assignment as completed
  markCompleted(id) 
    const assignment = this.assignments.find(assignment => assignment.id === id);
    if (assignment) 
      assignment.status = 'completed';
      console.log(`Assignment with ID{id} marked as completed.`);
    } else {
      console.log(`Assignment with ID ${id} not found.`);
    }
  }

  // Method to show all assignments
  showAssignments() {
if (this.assignments.length === 0) 
      console.log("No assignments available.");
      return;
    

    console.log("Assignments List:");
    this.assignments.forEach(assignment => 
      console.log(`ID:{assignment.id} | Title: assignment.title | Status:{assignment.status}`);
    });
  }

  // Method to show only pending assignments
  showPendingAssignments() {
    const pendingAssignments = this.assignments.filter(assignment => assignment.status === 'pending');
    if (pendingAssignments.length === 0) {
      console.log("No pending assignments.");
      return;
    }

    console.log("Pending Assignments:");
    pendingAssignments.forEach(assignment => {
      console.log(`ID: assignment.id | Title:{assignment.title}`);
    });
  }

  // Method to show completed assignments
  showCompletedAssignments() {
    const completedAssignments = this.assignments.filter(assignment => assignment.status === 'completed');
    if (completedAssignments.length === 0) {
      console.log("No completed assignments.");
      return;
    }

    console.log("Completed Assignments:");
    completedAssignments.forEach(assignment => {
      console.log(`ID: assignment.id | Title:{assignment.title}`);
    });
  }
}

// Example usage of the AssignmentManager class
const manager = new AssignmentManager();

// Add some assignments
manager.addAssignment("Math Homework", "Complete exercises from chapter 5.");
manager.addAssignment("Science Project", "Prepare a report on solar energy.");

// Display all assignments
manager.showAssignments();

// Mark an assignment as completed
manager.markCompleted(1);

// Display completed assignments
manager.showCompletedAssignments();

// Display pending assignments
manager.showPendingAssignments();

// Show all assignments again to check updated statuses
manager.showAssignments();
`
