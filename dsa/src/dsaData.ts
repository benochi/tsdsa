export interface DsaSubtopic {
  id: number;
  title: string;
  completed: boolean;
}

export interface DsaTopic {
  id: number;
  title: string;
  subtopics: DsaSubtopic[];
}

export const dsaTopics: DsaTopic[] = [
  {
    id: 1,
    title: 'Big-O Notation',
    subtopics: [
      { id: 11, title: 'Subtopic 1', completed: false },
      { id: 12, title: 'Subtopic 2', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Timing Our Code',
    subtopics: [
      { id: 21, title: 'Subtopic 1', completed: false },
      { id: 22, title: 'Subtopic 2', completed: false },
    ],
  },
];
