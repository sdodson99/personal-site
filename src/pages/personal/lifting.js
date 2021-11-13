import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import { graphql, useStaticQuery } from 'gatsby';
import WorkoutListing from '@/components/WorkoutListing/WorkoutListing';

const LiftingPage = () => {
  const liftingData = useStaticQuery(graphql`
    {
      allStrongCsv {
        nodes {
          Weight
          Reps
          Set_Order
          Exercise_Name
          Date
        }
      }
    }
  `);

  const workoutsMap = liftingData.allStrongCsv.nodes.reduce(
    (workoutMap, exercise) => {
      const {
        Exercise_Name: exerciseName,
        Date: workoutDateString,
        Set_Order: setString,
        Reps: repsString,
        Weight: weightString,
      } = exercise;

      if (!workoutMap[workoutDateString]) {
        workoutMap[workoutDateString] = {
          date: Date.parse(workoutDateString),
          exercises: {},
        };
      }

      const workoutExercises = workoutMap[workoutDateString].exercises;

      if (!workoutExercises[exerciseName]) {
        workoutExercises[exerciseName] = {
          name: exerciseName,
          sets: [],
        };
      }

      const set = Math.round(Number.parseFloat(setString));
      const reps = Math.round(Number.parseFloat(repsString));
      const weight = Math.round(Number.parseFloat(weightString));

      workoutExercises[exerciseName].sets.push({
        set,
        reps,
        weight,
      });

      return workoutMap;
    },
    {}
  );

  const workouts = Object.values(workoutsMap);
  workouts.forEach((w) => {
    w.exercises = Object.values(w.exercises);
  });
  const recentWorkouts = workouts.sort((a, b) => b.date - a.date).slice(0, 10);

  return (
    <Layout>
      <Helmet>
        <title>Weight Lifting - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Weight Lifting</PageHeading>
        <p className="mt-8">
          {
            'Check out my recent workouts. This content is pulled from my Strong account. I still need to automate this to update automatically!'
          }
        </p>
        <div className="mt-8">
          <WorkoutListing workouts={recentWorkouts} />
        </div>
      </div>
    </Layout>
  );
};

export default LiftingPage;
