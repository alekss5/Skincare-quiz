import React, { useState, useEffect } from 'react';
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
  const questionId = parseInt(id);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem('quizAnswers');
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (answerValue) => {
    setAnswers({ ...answers, [questionId]: answerValue });
  };

  const handleNext = () => {
    if (!answers[questionId]) {
      return;
    }

    if (questionId < quizQuestions.length - 1) {
      navigate(`/question/${questionId + 1}`);
    } else {
      navigate('/results', { state: { answers } });
      localStorage.removeItem('quizAnswers');
    }
  };

  const handleBack = () => {
    if (questionId > 0) {
      navigate(`/question/${questionId - 1}`);
    }
  };

  return (
    <div className="container">
      <div className="quiz-wrapper">
        <div className="header-container">
          <Title style={{
            color: '#1C2635', 
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '44px',
          }}>{quizQuestions[questionId].question}</Title>
        </div>

        <div className="options">
          {quizQuestions[questionId].options.map((option, index) => {
            const letter = String.fromCharCode(97 + index);
            return (
              <OptionButton
                key={index}
                isSelected={answers[questionId] === option.value}
                onClick={() => handleAnswer(option.value)}
              >
                {letter}. {option.label}
              </OptionButton>
            );
          })}
        </div>

        <div>
          <BackButton handleBack={handleBack}>Back</BackButton>
          <SubmitButton onClick={handleNext}>
            {quizQuestions.length === questionId + 1 ? "Discover your results" : <>Next question<img src={ArrowRight} alt='' style={{ marginLeft: '10px' }}/></>}
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
