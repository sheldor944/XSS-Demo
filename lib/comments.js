// lib/comments.js
// Simple in-memory data store for comments

let vulnerableComments = [
    { id: 1, name: "Alice", comment: "This is a normal comment!" }
    // { id: 2, name: "Hacker", comment: "<script>alert('XSS Attack!')</script>" },
    // { id: 3, name: "Malicious User", comment: "<div style='color:red;font-size:30px'>Styled attack!</div>" }
  ];
  
  let safeComments = [
    { id: 1, name: "Alice", comment: "This is a normal comment!" },
    { id: 2, name: "Hacker", comment: "<script>alert('XSS Attack!')</script>" },
    { id: 3, name: "Malicious User", comment: "<div style='color:red;font-size:30px'>Styled attack!</div>" }
  ];
  
  export function getVulnerableComments() {
    return [...vulnerableComments];
  }
  
  export function getSafeComments() {
    return [...safeComments];
  }
  
  export function addVulnerableComment(name, comment) {
    const id = vulnerableComments.length > 0 
      ? Math.max(...vulnerableComments.map(c => c.id)) + 1 
      : 1;
    const newComment = { id, name, comment };
    vulnerableComments.push(newComment);
    return newComment;
  }
  
  export function addSafeComment(name, comment) {
    const id = safeComments.length > 0 
      ? Math.max(...safeComments.map(c => c.id)) + 1 
      : 1;
    const newComment = { id, name, comment };
    safeComments.push(newComment);
    return newComment;
  }

  // Add this to lib/comments.js

let manualSafeComments = [
    { id: 1, name: "Alice", comment: "This is a normal comment!" },
    { id: 2, name: "Hacker", comment: "&lt;script&gt;alert('XSS Attack!')&lt;/script&gt;" },
    { id: 3, name: "Malicious User", comment: "&lt;div style='color:red;font-size:30px'&gt;Styled attack!&lt;/div&gt;" },
    { id: 4, name: "Evil User", comment: "&lt;img src='x' onerror='alert(\"Image XSS Attack!\")' /&gt;" }
  ];
  
  export function getManualSafeComments() {
    return [...manualSafeComments];
  }
  
  export function addManualSafeComment(name, comment) {
    const id = manualSafeComments.length > 0 
      ? Math.max(...manualSafeComments.map(c => c.id)) + 1 
      : 1;
    const newComment = { id, name, comment };
    manualSafeComments.push(newComment);
    return newComment;
  }