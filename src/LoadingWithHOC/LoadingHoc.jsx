import  { useState, useEffect } from 'react';

function withLoadingHoc(WrappedComponent) {
    
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div>Loading...</div>; 
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoadingHoc;
