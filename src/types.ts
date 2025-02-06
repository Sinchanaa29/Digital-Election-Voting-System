export interface Candidate {
  id: string;
  name: string;
  position: string;
}

export interface Position {
  id: string;
  title: string;
  candidates: Candidate[];
}

export interface Vote {
  position: string;
  candidateId: string;
}