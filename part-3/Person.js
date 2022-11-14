function Person ({name, age, hobbies}) {
  return (
    <div>
      <p>"Learn some information about this person"</p>
      <li>{ name }</li>
      <li>{ age }</li>
      <h3>{ age > 18 ? "Please go vote!" : "You must be 18"}</h3>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}