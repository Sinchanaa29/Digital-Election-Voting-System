import React, { useState } from 'react';
import { positions } from '../data/positions';
import { PositionCard } from './PositionCard';
import { SuccessMessage } from './SuccessMessage';
import { saveVote } from '../utils/storage';

export function VotingForm() {
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (positionId: string, candidateId: string) => {
    setVotes(prev => ({
      ...prev,
      [positionId]: candidateId
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveVote(votes);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {positions.map((position) => (
        <PositionCard
          key={position.id}
          position={position}
          onVote={handleVote}
        />
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Submit Votes
        </button>
      </div>
    </form>
  );
}