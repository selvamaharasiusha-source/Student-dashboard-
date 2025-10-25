// SPA Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    let page = this.getAttribute('data-page');
    document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
    document.getElementById(page).classList.add('active');
  });
});

// Dummy Data
const attendance = [
  { subject: "Math", attended: 32, total: 40 },
  { subject: "Physics", attended: 28, total: 40 },
  { subject: "Chemistry", attended: 35, total: 40 },
  { subject: "CS", attended: 40, total: 40 }
];
const timetable = [
  { day: "Monday", slots: ["Math", "Physics", "Break", "Chemistry", "CS", "Lab"] },
  { day: "Tuesday", slots: ["CS", "Math", "Break", "Physics", "Chemistry", "Sports"] },
  { day: "Wednesday", slots: ["Physics", "Chemistry", "Break", "CS", "Math", "Lab"] },
  { day: "Thursday", slots: ["Math", "CS", "Break", "Physics", "Chemistry", "Sports"] },
  { day: "Friday", slots: ["Chemistry", "Physics", "Break", "Math", "CS", "Lab"] }
];
const marks = [
  { subject: "Math", internal: 45, external: 48 },
  { subject: "Physics", internal: 38, external: 41 },
  { subject: "Chemistry", internal: 42, external: 44 },
  { subject: "CS", internal: 50, external: 49 }
];
const notices = [
  { title: "Holiday Notice", body: "College will remain closed on Nov 1st for Diwali." },
  { title: "Exam Timetable", body: "Mid-semester exams start from Nov 10th. Check the timetable section." },
  { title: "Event", body: "Annual Sports Meet registration is open till Nov 5th." }
];

// Render Attendance
const attendanceBody = document.getElementById('attendance-data');
attendance.forEach(row => {
  const percent = ((row.attended / row.total) * 100).toFixed(2);
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${row.subject}</td><td>${row.attended}</td><td>${row.total}</td><td>${percent}%</td>`;
  attendanceBody.appendChild(tr);
});

// Render Timetable
const timetableBody = document.getElementById('timetable-data');
timetable.forEach(row => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${row.day}</td>` + row.slots.map(slot => `<td>${slot}</td>`).join('');
  timetableBody.appendChild(tr);
});

// Render Marks
const marksBody = document.getElementById('marks-data');
marks.forEach(row => {
  const total = row.internal + row.external;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${row.subject}</td><td>${row.internal}</td><td>${row.external}</td><td>${total}</td>`;
  marksBody.appendChild(tr);
});

// Render Notices
const noticesList = document.getElementById('notices-data');
notices.forEach(n => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${n.title}</strong><br>${n.body}`;
  noticesList.appendChild(li);
});