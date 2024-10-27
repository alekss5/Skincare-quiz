import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/SubmitButton';
import CircularProgress from '../../components/CircularProgress';
import BackButton from '../../components/BackButton/BackButton';
import OptionButton from '../../components/OptionButton/OptionButton';
import quizQuestions from './quizQuestions.json';
import Title from '../../components/Title/Title';
import ArrowRight from '../../assets/arrow-right.svg';
import styles from './Quiz.module.css';

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
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [answers]);

  const handleAnswer = (answerValue) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answerValue }));
  };

  const handleNext = () => {
    if (!answers[questionId]) return;

    if (questionId < quizQuestions.length - 1) {
      navigate(`/question/${questionId + 1}`);
    } else {
      navigate('/results', { state: { answers } });
      localStorage.removeItem('quizAnswers');
    }
  };

  const handleBack = () => {
    if (questionId > 0) navigate(`/question/${questionId - 1}`);
  };

  const currentQuestion = useMemo(() => quizQuestions[questionId], [questionId]);

  const isLastQuestion = questionId !== quizQuestions.length - 1
  return (
    <div className={styles.container}>
      <div className={styles.quizWrapper}>
        <div className={styles.headerContainer}>
          <Title style={{ color: '#1C2635', fontSize: '40px', fontWeight: '500', lineHeight: '44px' }}>
            {currentQuestion.question}
          </Title>
        </div>

        <div className={styles.options}>
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

        <div className={styles.navigationButtons}>
          <BackButton handleBack={handleBack}>Back</BackButton>
          <SubmitButton onClick={handleNext} text={isLastQuestion ?'Next question': 'Discover your results' }>
            {isLastQuestion && <img src={ArrowRight} alt="Next" style={{ marginLeft: '10px' }} />}
          </SubmitButton>
        </div>
      </div>

      <div className={styles.progressWrapper}>
        <CircularProgress questionNumber={questionId + 1} totalQuestions={quizQuestions.length} />
      </div>
    </div>
  );
};

export default Quiz;
