import React from 'react';
import { positions } from '../../data/positions';
import { useVotes } from '../../hooks/useVotes';
import { CandidateResult } from './CandidateResult';

export function VoteResults() {
  const { votes, totalVotes } = useVotes();

  return (
    <div className="grid gap-6">
      {positions.map((position) => (
        <div key={position.id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            {position.title}
          </h3>
          <div className="space-y-4">
            {position.candidates.map((candidate) => (
              <CandidateResult
                key={candidate.id}
                candidate={candidate}
                votes={votes[position.id]?.[candidate.id] || 0}
                totalVotes={totalVotes}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}