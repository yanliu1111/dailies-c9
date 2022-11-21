import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const SuperheroDetail = (props) => {
  const superhero = props.superhero;
  const { name, powers, weaknesses, location, alterEgo } = superhero;
  return (
    <div>
      <p>Name:</p>
      <p>{name}</p>
      <p>Alter Ego:</p>
      <p>{alterEgo}</p>
      <p>Powers:</p>
      <ul>
        {powers.map((power) => {
          return <li key={power}>{power}</li>;
        })}
      </ul>
      {weaknesses && weaknesses.length > 0 && (
        <>
          <p>Weaknesses:</p>
          <ul>
            {weaknesses.map((weakness) => {
              return <li key={weakness}>{weakness}</li>;
            })}
          </ul>
        </>
      )}
      <p>Location:</p>
      {!location ? (
        <p>Unknown</p>
      ) : (
        <div>
          <p>City:</p>
          <p>{location.city}</p>
          <p>Province:</p>
          <p>{location.province}</p>
          <p>Country:</p>
          <p>{location.country}</p>
        </div>
      )}
    </div>
  );
};
const SuperheroList = () => {
  const [superheroes, setSuperheroes] = useState([]);
  useEffect(() => {
    const getSuperheros = async () => {
      const response = await fetch('/api/superhero');
      const superheroesData = await response.json();
      setSuperheroes(superheroesData);
    };
    getSuperheros();
  }, []);
  return (
    <div>
      <h2>Superhero List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>AlterEgo</TableCell>
              <TableCell>Powers</TableCell>
              <TableCell>Weakness</TableCell>
              <TableCell>Sidekicks</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {superheroes.map((superheroe) => (
              <TableRow
                key={superheroe.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {superheroe.name}
                </TableCell>
                <TableCell>{superheroe.alterEgo}</TableCell>
                <TableCell>
                  <ul>
                    {superheroe.powers.map((power) => {
                      return <li key={power}>{power}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {superheroe.weaknesses.map((weakness) => {
                      return <li key={weakness}>{weakness}</li>;
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {superheroe.sidekicks.map((sidekick) => {
                      return (
                        <li key={sidekick.name}>
                          {sidekick.name}({superheroe.alterEgo})
                        </li>
                      );
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <Button variant="delete">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {superheroes.length > 0
        ? superheroes.map((superhero) => {
            return (
              <SuperheroDetail key={superhero._id} superhero={superhero} />
            );
          })
        : 'No superheroes'} */}
    </div>
  );
};

export default SuperheroList;
