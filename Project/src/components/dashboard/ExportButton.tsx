import React from 'react';
import { Download } from 'lucide-react';
import { positions } from '../../data/positions';
import { useVotes } from '../../hooks/useVotes';
import { exportToExcel } from '../../utils/exportToExcel';

export function ExportButton() {
  const { votes } = useVotes();

  const handleExport = () => {
    exportToExcel(positions, votes);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
    >
      <Download size={20} />
      <span>Export to Excel</span>
    </button>
  );
}