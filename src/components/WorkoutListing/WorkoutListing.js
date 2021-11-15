import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WorkoutListing.module.scss';
import WorkoutCard from '../WorkoutCard/WorkoutCard';

const WorkoutListing = ({ workouts }) => {
  const workoutCards = workouts.map((w) => (
    <div key={w.date.toString()} className={styles.workoutCard}>
      <WorkoutCard {...w} />
    </div>
  ));

  return <div className={styles.workoutListing}>{workoutCards}</div>;
};

WorkoutListing.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.object.isRequired,
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
    })
  ),
};

WorkoutListing.defaultProps = {
  workouts: [],
};

export default WorkoutListing;
