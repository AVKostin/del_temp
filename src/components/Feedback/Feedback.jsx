import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map((option, index) => (
      <FeedbackButton
        key={index}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackWrapper>
);

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
