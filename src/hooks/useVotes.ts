import { useState, useEffect } from 'react';
import { getVotes } from '../utils/storage';

export function useVotes() {
  const [votes, setVotes] = useState<Record<string, Record<string, number>>>({});
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const storedVotes = getVotes();
    setVotes(storedVotes);
    
    // Calculate total votes
    const total = Object.values(storedVotes).reduce((acc, positionVotes) => {
      const positionTotal = Object.values(positionVotes).reduce((sum, count) => sum + count, 0);
      return acc + positionTotal;
    }, 0);
    
    setTotalVotes(total);
  }, []);

  return { votes, totalVotes };
}