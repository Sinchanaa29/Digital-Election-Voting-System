import React from 'react';
import type { Candidate } from '../../types';

interface CandidateResultProps {
  candidate: Candidate;
  votes: number;
  totalVotes: number;
}

export function CandidateResult({ candidate, votes, totalVotes }: CandidateResultProps) {
  const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : '0';

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-700">
            {candidate.name}
          </span>
          <span className="text-gray-600">
            {votes} votes ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}