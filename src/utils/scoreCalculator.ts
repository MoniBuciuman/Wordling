import {Answer} from '../state/answerAtom';

export interface Score {
  key: string;
  score: number;
  answers: Answer[];
}

const calculateScoreChange = (
  isCorrect: boolean,
  index: number,
  totalAnswers: number,
): number => {
  const weight = 1 / (totalAnswers - index); // Weight decreases for older answers
  return isCorrect ? weight : -weight;
};

const updateScoreMap = (
  scoreMap: Record<string, {score: number; answers: Answer[]}>,
  answer: Answer,
  index: number,
  totalAnswers: number,
) => {
  const {key, isCorrect} = answer;
  if (!scoreMap[key]) {
    scoreMap[key] = {score: 0, answers: []};
  }
  scoreMap[key].score += calculateScoreChange(isCorrect, index, totalAnswers);
  scoreMap[key].answers.unshift(answer); // Adding answer to the start of the array for latest to oldest order
};

export const calculateAndSortScores = (answers: Answer[]): Score[] => {
  const scoreMap: Record<string, {score: number; answers: Answer[]}> = {};

  answers.forEach((answer, index) =>
    updateScoreMap(scoreMap, answer, index, answers.length),
  );

  const sortedScores: Score[] = Object.keys(scoreMap)
    .map(key => ({
      key,
      score: scoreMap[key].score,
      answers: scoreMap[key].answers,
    }))
    .sort((a, b) => a.score - b.score);

  return sortedScores;
};
