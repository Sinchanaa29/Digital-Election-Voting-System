import React from 'react';
import { Users } from 'lucide-react';
import { useVoterStats } from '../../hooks/useVoterStats';

export function VoterStats() {
  const { voterCount } = useVoterStats();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-full">
          <Users className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Total Voters</h3>
          <p className="text-3xl font-bold text-blue-600">{voterCount}</p>
        </div>
      </div>
    </div>
  );
}