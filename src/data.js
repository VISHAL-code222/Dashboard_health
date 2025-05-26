export const navigationLinks = [
  { id: 1, text: 'Dashboard', icon: '📊' },
  { id: 2, text: 'History', icon: '📜' },
  { id: 3, text: 'Calendar', icon: '📅' },
  { id: 4, text: 'Appointments', icon: '🗓️' },
  { id: 5, text: 'Statistics', icon: '📈' },
  { id: 6, text: 'Tests', icon: '🧪' },
  { id: 7, text: 'Chat', icon: '💬' },
  { id: 8, text: 'Support', icon: '❓' },
  { id: 9, text: 'Setting', icon: '⚙️' },
];

export const userProfile = {
  name: 'Dr.Vishal'
 
};

export const anatomicalHealthData = {
 
  indicators: [
    { id: 'heart', name: 'Healthy Heart', status: 'healthy', position: { top: '30%', left: '45%' } },
    { id: 'lungs', name: 'Lungs', status: 'critical', position: { top: '40%', left: '30%' } },
    { id: 'teeth', name: 'Teeth', status: 'attention', position: { top: '20%', left: '50%' } },
    { id: 'bone', name: 'Bone', status: 'healthy', position: { top: '55%', left: '60%' } },
  ],
};

export const healthStatusCardsData = [
  { id: 1, organ: 'Lungs', date: '10 Oct', status: 'Critical', icon: '🔴' },
  { id: 2, organ: 'Teeth', date: '12 Oct', status: 'Needs Attention', icon: '🟡' },
  { id: 3, organ: 'Bone', date: '15 Oct', status: 'Healthy', icon: '🟢' },
];

export const calendarData = {
  month: 'October',
  year: 2021,
  appointments: [
    { day: 8, times: ['09:00', '11:00', '13:00', '15:00'] },
    { day: 12, times: ['09:00'] },
    { day: 18, times: ['11:00'] },
    { day: 26, times: ['13:00'] },
  ],
  detailedAppointments: [
    { id: 1, type: 'Dentist', doctor: 'Dr. Alex Smith', date: '12 Oct', time: '09:00 AM', icon: '🦷' },
    { id: 2, type: 'Physiotherapy Appointment', doctor: 'Dr. Maria Garcia', date: '18 Oct', time: '11:00 AM', icon: '💪' },
  ],
};

export const upcomingScheduleData = {
  onThursday: [
    { id: 1, title: 'Health checkup complete', time: '08:00 - 09:00 AM', icon: '✅' },
    { id: 2, title: 'Ophthalmologist', time: '10:00 - 11:00 AM', icon: '👁️' },
  ],
  onSaturday: [
    { id: 3, title: 'Cardiologist', time: '09:30 - 10:30 AM', icon: '❤️' },
    { id: 4, title: 'Neurologist', time: '11:00 - 12:00 PM', icon: '🧠' },
  ],
};

export const activityFeedData = {
  summary: '3 appointments on this week',
};

export const recentActivitiesData = [
  { id: 1, user: 'Dr. Smith', action: 'updated patient notes for John Doe.', time: '10 min ago', icon: '📝' },
  { id: 2, user: 'You', action: 'scheduled a new appointment with Dr. Emily.', time: '1 hour ago', icon: '🗓️' },
  { id: 3, user: 'System', action: 'sent a reminder for upcoming blood test.', time: '2 hours ago', icon: '🔔' },
  { id: 4, user: 'Nurse Jane', action: 'added new lab results for Sarah P.', time: '5 hours ago', icon: '🧪' },
];

export const icons = {
  search: '🔍',
  notification: '🔔',
  add: '+',
  logo: '🏥',
};
