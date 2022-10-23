function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1
        style={{ 
        marginTop: '1rem',
        fontFamily: 'monospace',
        color: '#4b9be1' 
      }}
    >
        Riku's website
      </h1>
      <h2
        style={{
          marginBottom: '10rem',
          fontFamily: 'cursive',
          color: 'rgb(243, 103, 123)'
        }}
      >
        Riku is very smart
      </h2>
      <button
        style={{
          padding: '1rem',
          fontSize: '2rem',
          background: 'teal',
          color: 'red',
          fontFamily: 'cursive'
        }}
        onClick={() => alert('Hello there')}
      >
        Hello!
      </button>
      <button
        style={{
          padding: '1rem',
          fontSize: '2rem',
          background: 'purple',
          color: 'blue',
          marginTop: '2rem',
          fontFamily: 'fantasy'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, Riku!');
          }
        }}
      >
        {"Hi! what's your name? My name is Riku."}
      </button>
    </div>
  );
}