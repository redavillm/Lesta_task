import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchVehicles } from "./scripts";
import { Vehicle } from "./interfaces";
import { SearchForm } from "./components/SearchForm";
import { ShipsList } from "./components/ShipsList";

const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
`;

function App() {
  const [warShips, setWarShips] = useState<Vehicle[]>([]);
  const [filtredList, setFilteredList] = useState<Vehicle[]>(warShips);

  useEffect(() => {
    fetchVehicles()
      .then((data: Vehicle[]) => {
        setWarShips(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных: ", error);
      });
  }, []);

  return (
    <Container className="App">
      <SearchForm warShips={warShips} setFilteredList={setFilteredList} />
      <ShipsList warShips={warShips} filtredList={filtredList} />
    </Container>
  );
}

export default App;
