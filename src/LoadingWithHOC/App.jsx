import React from 'react';
import withLoading from './LoadingWithHOC/LoadingHoc'; 
import DataDisplay from './LoadingWithHOC/DataDisplay';

const EnhancedDataDisplay = withLoading(DataDisplay);

const App = () => {
  const data = "Here is some fetched data!";

  return (
    <div>
      <EnhancedDataDisplay data={data} />
    </div>
  );
};

export default App;
