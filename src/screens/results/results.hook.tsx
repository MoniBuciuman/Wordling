import {useContext} from 'react';
import {ResponseType} from '../../hooks/useScore';
import {useNavigation} from '../../navigation/useNavigation';
import {ScoreContext} from '../../context/ScoreContext';

export const useResults = () => {
  const {navigate} = useNavigation();
  const {responses} = useContext(ScoreContext);

  return {
    message: getFeedbackMessage(responses),
    responses,
    navigate,
    noOfCorrectAnswers: getNumberOfCorrectAnswers(responses),
  };
};

function getNumberOfCorrectAnswers(responses: ResponseType[]): number {
  const correctAnswers = responses.filter(
    response => response.status === 'correct',
  ).length;
  return correctAnswers;
}

function getFeedbackMessage(responses: ResponseType[]): string {
  const totalQuestions = responses.length;
  const correctAnswers = responses.filter(
    response => response.status === 'correct',
  ).length;

  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  // Define messages for each percentage bracket
  const messages: {[key: string]: string[]} = {
    '90-100': [
      'Exceptional work!',
      "Well done! You're on top of your game.",
      'Outstanding performance!',
      "You've mastered this!",
    ],
    '80-89': [
      "Great job! You're almost there.",
      'Impressive! Just a few misses.',
      "Keep it up, you're doing great!",
      "You've got a strong grasp on this.",
    ],
    '70-79': [
      "Good effort! There's some room for improvement.",
      "You did well! Let's aim for even higher next time.",
      "You're on the right track!",
      'Nice job, keep practicing!',
    ],
    '60-69': [
      'Fair performance. A bit more practice will help.',
      "You've got the basics. Let's refine those details.",
      "A decent attempt. Let's work on those tricky parts.",
      "You're getting there. Keep pushing!",
    ],
    '50-59': [
      "You're halfway there. Review and you'll do even better!",
      'Keep going! Every mistake is a learning opportunity.',
      "You've got potential. Time for some review.",
      "It's a start. Let's focus on those missed areas.",
    ],
    '0-49': [
      "Don't get discouraged. Let's revisit and practice.",
      'Every master starts as a beginner. Keep trying!',
      "Remember, practice makes perfect. You'll get it!",
      'Learning is a journey. Review and come back stronger.',
    ],
  };

  // Determine which message bracket to pick from based on percentage
  let chosenBracket: string;
  if (percentageCorrect >= 90) chosenBracket = '90-100';
  else if (percentageCorrect >= 80) chosenBracket = '80-89';
  else if (percentageCorrect >= 70) chosenBracket = '70-79';
  else if (percentageCorrect >= 60) chosenBracket = '60-69';
  else if (percentageCorrect >= 50) chosenBracket = '50-59';
  else chosenBracket = '0-49';

  // Randomly pick a message from the chosen bracket
  const randomMessage =
    messages[chosenBracket][
      Math.floor(Math.random() * messages[chosenBracket].length)
    ];

  return randomMessage;
}
