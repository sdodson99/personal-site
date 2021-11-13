import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WorkoutCard.module.scss';

const WorkoutCard = ({ date, exercises }) => (
  <div className={styles.workoutCard}>
    {date}
    <pre>{JSON.stringify(exercises, null, 4)}</pre>
  </div>
);

WorkoutCard.propTypes = {
  date: PropTypes.number.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sets: PropTypes.arrayOf(
        PropTypes.shape({
          set: PropTypes.number.isRequired,
          reps: PropTypes.number.isRequired,
          weight: PropTypes.number,
        })
      ),
    })
  ),
};

WorkoutCard.defaultProps = {
  exercises: {},
};

export default WorkoutCard;
