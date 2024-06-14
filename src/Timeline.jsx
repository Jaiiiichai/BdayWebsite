import './Timeline.css';

const events = [
  { date: '2018-06-12', event: "Met for the first time" },
  { date: '2019-09-20', event: "First date" },
  { date: '2020-03-15', event: "Moved in together" },
  { date: '2021-05-08', event: "Celebrated our first anniversary" },
  // Add more events as needed
];

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function Timeline() {
  return (
    <div className="timeline">
      <h1>Our Journey Together</h1>
      <div className="events">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="date">{formatDate(event.date)}</div>
            <div className="description">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
