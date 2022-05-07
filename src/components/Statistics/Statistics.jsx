import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
// import ResetBtn from '../ResetBtn';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>
      <span>good: {good}</span>
    </StatisticsItem>

    <StatisticsItem>
      <span>neutral: {neutral}</span>
    </StatisticsItem>

    <StatisticsItem>
      <span>bad: {bad}</span>
    </StatisticsItem>

    <StatisticsItem>
      <span>total: {total}</span>
    </StatisticsItem>

    <StatisticsItem>
      <span>Positive feedback: {positivePercentage}</span> %
    </StatisticsItem>
    {/* <ResetBtn /> */}
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
