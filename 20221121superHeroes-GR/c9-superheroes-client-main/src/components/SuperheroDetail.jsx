import React, { useEffect } from 'react';

const SuperheroDetail = (props) => {
  console.log('props is ', props);

  const { id } = props;
  console.log('id from props is ', id);

  useEffect(() => {
    const getSuperhero = async () => {
      const response = await fetch('/api/superheroes/' + id);
      const data = await response.json();
      console.log('data is ', data);
    };
    getSuperhero();
  }, []);

  return <div></div>;
};

export default SuperheroDetail;
