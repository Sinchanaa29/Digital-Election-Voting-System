import React from 'react';
import type { Position } from '../types';
import { CandidateOption } from './CandidateOption';

interface PositionCardProps {
  position: Position;
  onVote: (positionId: string, candidateId: string) => void;
}

export function PositionCard({ position, onVote }: PositionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{position.title}</h3>
      <div className="space-y-2">
        {position.candidates.map((candidate) => (
          <CandidateOption
            key={candidate.id}
            candidate={candidate}
            positionId={position.id}
            onChange={onVote}
          />
        ))}
      </div>
    </div>
  );
}