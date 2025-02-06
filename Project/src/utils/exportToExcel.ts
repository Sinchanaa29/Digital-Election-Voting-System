import * as XLSX from 'xlsx';
import type { Position } from '../types';

export function exportToExcel(
  positions: Position[],
  votes: Record<string, Record<string, number>>
) {
  // Prepare data for Excel
  const data = positions.flatMap((position) =>
    position.candidates.map((candidate) => ({
      Position: position.title,
      Candidate: candidate.name,
      Votes: votes[position.id]?.[candidate.id] || 0,
    }))
  );

  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Voting Results');

  // Generate Excel file
  XLSX.writeFile(wb, 'ieee_election_results.xlsx');
}