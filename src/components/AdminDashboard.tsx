import React from 'react';
import { VoterStats } from './dashboard/VoterStats';
import { VoteResults } from './dashboard/VoteResults';
import { ExportButton } from './dashboard/ExportButton';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Voting Results</h2>
        <ExportButton />
      </div>

      <VoterStats />
      <VoteResults />
    </div>
  );
}