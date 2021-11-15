import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WorkoutCard.module.scss';

const WorkoutCard = ({ date, exercises }) => {
  const dateDisplay = date.toFormat('MM/dd/yyyy');

  return (
    <div className={styles.workoutCard}>
      <h2 className="text-2xl">{dateDisplay} Workout</h2>
      <div className="mt-5">
        {exercises.map((e) => (
          <div key={e.name} className="pb-3 sm:flex">
            <h3 className="flex-1 text-lg">{e.name}</h3>
            <table className="table-auto flex-1 mx-auto">
              <thead className={styles.exercisesHeading}>
                <tr>
                  <th>Set</th>
                  <th>Reps</th>
                  <th>Weight (lbs.)</th>
                </tr>
              </thead>
              <tbody>
                {e.sets.map((s) => (
                  <tr key={`${e.name}_${s.set}`} className="text-center">
                    <td>{s.set}</td>
                    <td>{s.reps}</td>
                    <td>{s.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

WorkoutCard.propTypes = {
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
};

WorkoutCard.defaultProps = {
  exercises: {},
};

export default WorkoutCard;
