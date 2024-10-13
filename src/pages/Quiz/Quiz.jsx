import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/SubmitButton';
import CircularProgress from '../../components/CircularProgress';
import ArrowRight from '../../assets/arrow-right.svg';
import BackButton from '../../components/BackButton';
import OptionButton from '../../components/OptionButton';
import quizQuestions from './quizQuestions.json';
import Title from '../../components/Title';
import './Quiz.css';

const Quiz = () => {
  const { id } = useParams();
  const questionId = useMemo(() => parseInt(id), [id]); 
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem('quizAnswers');
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
    }, 300); // Debounce writing to localStorage
    return () => clearTimeout(timeoutId);
  }, [answers]);

  const handleAnswer = (answerValue) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answerValue }));
  };

  const handleNext = () => {
    if (!answers[questionId]) return; // Prevent moving to next if no answer selected

    if (questionId < quizQuestions.length - 1) {
      navigate(`/question/${questionId + 1}`);
    } else {
      navigate('/results', { state: { answers } });
      localStorage.removeItem('quizAnswers'); // Clear answers on completion
    }
  };

  const handleBack = () => {
    if (questionId > 0) navigate(`/question/${questionId - 1}`);
  };

  // Memoize current question to avoid unnecessary re-renders
  const currentQuestion = useMemo(() => quizQuestions[questionId], [questionId]);

  return (
    <div className="container">
      <div className="quiz-wrapper">
        <div className="header-container">
          <Title
            style={{
              color: '#1C2635',
              fontSize: '40px',
              fontWeight: 500,
              lineHeight: '44px',
            }}
          >
            {currentQuestion.question}
          </Title>
        </div>

        <div className="options">
          {currentQuestion.options.map((option, index) => {
            const letter = String.fromCharCode(97 + index);
            return (
              <OptionButton
                key={option.value}
                isSelected={answers[questionId] === option.value}
                onClick={() => handleAnswer(option.value)}
              >
                {letter}. {option.label}
              </OptionButton>
            );
          })}
        </div>

        <div className="navigation-buttons">
          <BackButton handleBack={handleBack}>Back</BackButton>
          <SubmitButton onClick={handleNext}>
            {questionId === quizQuestions.length - 1
              ? 'Discover your results'
              : (
                <>
                  Next question
                  <img src={ArrowRight} alt="Next" style={{ marginLeft: '10px' }} />
                </>
              )}
          </SubmitButton>
        </div>
      </div>

      <div className="progress-wrapper">
        <CircularProgress questionId={questionId} totalQuestions={quizQuestions.length} />
      </div>
    </div>
  );
};

export default Quiz;
