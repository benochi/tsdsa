import { useState, useEffect } from 'react';
import './App.css';
import BigONotation from './components/BigONotation';
import { dsaTopics } from './dsaData';

function App() {
  const [completedTopics, setCompletedTopics] = useState<number[]>([]);
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  useEffect(() => {
    const storedCompletedTopics = localStorage.getItem('completedTopics');
    if (storedCompletedTopics) {
      setCompletedTopics(JSON.parse(storedCompletedTopics));
    }
  }, []);

  const toggleCompletion = (topicId: number) => {
    if (completedTopics.includes(topicId)) {
      const updatedTopics = completedTopics.filter((id) => id !== topicId);
      setCompletedTopics(updatedTopics);
    } else {
      const updatedTopics = [...completedTopics, topicId];
      setCompletedTopics(updatedTopics);
    }

    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  };

  const toggleTopic = (topicId: number) => {
    if (activeTopic === topicId) {
      setActiveTopic(null);
    } else {
      setActiveTopic(topicId);
    }
  };

  return (
    <>
      <h1>Data Structures and Algorithms Course</h1>
      <ul>
        {dsaTopics.map((topic) => (
          <li key={topic.id}>
            <span>{topic.title}</span>
            <button onClick={() => toggleCompletion(topic.id)}>
              {completedTopics.includes(topic.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
            </button>
            <button onClick={() => toggleTopic(topic.id)}>
              {activeTopic === topic.id ? 'Close Topic' : 'View Topic'}
            </button>
          </li>
        ))}
      </ul>
      <div className="card">
        {activeTopic === 1 && (
          <BigONotation topics={dsaTopics.find((topic) => topic.id === 1)?.subtopics || []} toggleCompletion={toggleCompletion} />
        )}
      </div>
    </>
  );
}

export default App;