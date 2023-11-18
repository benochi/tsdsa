import { DsaSubtopic } from '../dsaData';
import { useState, useEffect } from 'react';

interface BigONotationProps {
  topics: DsaSubtopic[];
  toggleCompletion: (topicId: number) => void;
}

function BigONotation({ topics, toggleCompletion }: BigONotationProps) {
  const [completedSubtopics, setCompletedSubtopics] = useState<number[]>([]);

  useEffect(() => {
    const storedCompletedSubtopics = localStorage.getItem('completedSubtopics');
    if (storedCompletedSubtopics) {
      setCompletedSubtopics(JSON.parse(storedCompletedSubtopics));
    }
  }, []);

  const toggleSubtopicCompletion = (subtopicId: number) => {
    let updatedSubtopics;
    if (completedSubtopics.includes(subtopicId)) {
      updatedSubtopics = completedSubtopics.filter((id) => id !== subtopicId);
    } else {
      updatedSubtopics = [...completedSubtopics, subtopicId];
    }
  
    setCompletedSubtopics(updatedSubtopics);
    localStorage.setItem('completedSubtopics', JSON.stringify(updatedSubtopics));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Big O Notation</h1>
      <ul>
        {topics.map((subtopic) => (
          <li key={subtopic.id} className={completedSubtopics.includes(subtopic.id) ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={completedSubtopics.includes(subtopic.id)}
                onChange={() => {
                  toggleSubtopicCompletion(subtopic.id);
                  toggleCompletion(subtopic.id);
                }}
              />
              <span>{subtopic.title}</span>
            </label>
          </li>
        ))}
      </ul>
      <div>
        <p >
          Cheatsheet available
          <a
            href="https://www.bigocheatsheet.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Why Big O Notation?</h4>
        <p >
          It gives us a common way to compare code performance and trade-offs.
        </p>
        <p >
          It helps in identifying slow code or improving our applications.
        </p>
        <p >It is often used in interviews as well.</p>
      </div>
      <div>
        <h4>Examples</h4>
        <p >
          Let's say we have a simple loop:
        </p>
        <div className="code-block-container">
          <pre >
            <code > 
              {`
                function addToNum(number) {
                  let total = 0;
                  for (let i = 1; i <= number; i++) {
                    total += i;
                  }
                  return total;
                }`}
            </code>
          </pre>
          <pre >
            <code> 
              {`
                function addToNum(number) {
                  return number * (number + 1) / 2;
                }`}
            </code>
          </pre>
        </div>
        <div>
          <h4>What makes code better, and which one is better?</h4>
          <p >Speed? Memory usage? Data storage? Readability?</p>
          <p >Typically, speed and memory usage are considered to be the primary metrics for "better".</p>
        </div>
      </div>
    </div>
  );
}

export default BigONotation;
