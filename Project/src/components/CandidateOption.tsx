import React from 'react';
import type { Candidate } from '../types';

interface CandidateOptionProps {
  candidate: Candidate;
  positionId: string;
  onChange: (positionId: string, candidateId: string) => void;
}

export function CandidateOption({ candidate, positionId, onChange }: CandidateOptionProps) {
  return (
    <label className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
      <input
        type="radio"
        name={positionId}
        value={candidate.id}
        onChange={() => onChange(positionId, candidate.id)}
        required
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="text-gray-700">{candidate.name}</span>
    </label>
  );
}