import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import { graphql, useStaticQuery } from 'gatsby';

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
        workoutExercises[exerciseName] = [];
      }

      const set = Number.parseInt(setString);
      const reps = Number.parseInt(repsString);
      const weight = Number.parseInt(weightString);

      workoutExercises[exerciseName].push({
        set,
        reps,
        weight,
      });

      return workoutMap;
    },
    {}
  );

  const workouts = Object.values(workoutsMap);
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
        <pre>{JSON.stringify(recentWorkouts, null, 4)}</pre>
      </div>
    </Layout>
  );
};

export default LiftingPage;
