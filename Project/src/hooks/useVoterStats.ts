import { useState, useEffect } from 'react';
import { getVoterCount } from '../utils/storage';

export function useVoterStats() {
  const [voterCount, setVoterCount] = useState(0);

  useEffect(() => {
    const count = getVoterCount();
    setVoterCount(count);
  }, []);

  return { voterCount };
}