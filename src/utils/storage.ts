const VOTES_KEY = 'ieee_election_votes';
const VOTERS_KEY = 'ieee_election_voters';

export function saveVote(votes: Record<string, string>) {
  const storedVotes = getVotes();
  
  // Update vote counts
  Object.entries(votes).forEach(([positionId, candidateId]) => {
    if (!storedVotes[positionId]) {
      storedVotes[positionId] = {};
    }
    storedVotes[positionId][candidateId] = (storedVotes[positionId][candidateId] || 0) + 1;
  });
  
  // Increment voter count
  const currentVoters = getVoterCount();
  localStorage.setItem(VOTERS_KEY, (currentVoters + 1).toString());
  
  localStorage.setItem(VOTES_KEY, JSON.stringify(storedVotes));
}

export function getVotes(): Record<string, Record<string, number>> {
  const votes = localStorage.getItem(VOTES_KEY);
  return votes ? JSON.parse(votes) : {};
}

export function getVoterCount(): number {
  const count = localStorage.getItem(VOTERS_KEY);
  return count ? parseInt(count, 10) : 0;
}