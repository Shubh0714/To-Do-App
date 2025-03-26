import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Dashboard;
