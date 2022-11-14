function Tweet( {username, name, date, message} ) {
  return (
    <div>
      <h1>{username}</h1>
      <p>{message}</p>
      <h3>- {name}</h3>
      <h3>{ date }</h3>
    </div>
  )
}