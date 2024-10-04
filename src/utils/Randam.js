
export const getRandomQuestions = (data, numQuestions = 30) => {
  // Shuffle the array
  const shuffledData = [...data].sort(() => Math.random() - 0.5);
  // Slice the first 'numQuestions' elements or less if not enough data
  return shuffledData.slice(0, numQuestions);
};
