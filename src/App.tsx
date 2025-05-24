import './App.css'

function App() {
  // Get current time and date
  const now = new Date();
  // Local time offset for BST (+1)
  const localNow = new Date(now.getTime() + (now.getTimezoneOffset() + 60) * 60000);
  const hours = localNow.getHours();
  let greeting = "Good Morning";
  if (hours >= 12 && hours < 18) greeting = "Good Afternoon";
  else if (hours >= 18 || hours < 5) greeting = "Good Evening";

  // Format date as Friday 3 May 2025
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayName = days[localNow.getDay()];
  const dayNum = localNow.getDate();
  const month = months[localNow.getMonth()];
  const year = localNow.getFullYear();
  const formattedDate = `${dayName} ${dayNum} ${month} ${year}`;

  return (
    <div className="barry-welcome">
      <h1>{greeting}, Barry!</h1>
      <p className="barry-date">Today is {formattedDate}.</p>
      <div className="barry-links">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="barry-link">🔎 Google</a>
        <a href="https://www.bbc.co.uk/news" target="_blank" rel="noopener noreferrer" className="barry-link">📰 BBC News</a>
      </div>
      <button
        className="barry-mail-btn"
        onClick={() => window.location.href = 'mailto:cholerton@gmail.com?subject=Hello Barry!'}
      >
        📧 Email cholerton@gmail.com
      </button>
      <p className="barry-message">Have a wonderful day! 😊</p>
    </div>
  );
}

export default App
