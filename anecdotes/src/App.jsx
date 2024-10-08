import { useState } from 'react';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const highestVotes = Math.max(...points);
  const highestVotesIndex = points.indexOf(highestVotes);
  const highestVotesAnecdote = anecdotes[highestVotesIndex];

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  };

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>

      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleClick} text="Next anecdote" />

      <h2>Anecdotes with most votes</h2>
      <p>{highestVotesAnecdote}</p>
      <p>{highestVotes}</p>
    </div>
  );
};

export default App;
