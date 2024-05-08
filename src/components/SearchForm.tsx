import styled from "styled-components";
import { Options, Vehicle } from "../interfaces";
import { useState } from "react";
import { listFilter, optionsCreator } from "../scripts";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCatalogEl = styled.div`
  margin: 20px 40px;
  & select {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: black;
    outline: none;
    border-radius: 5px;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

interface SearchFormProps {
  warShips: Vehicle[];
  setFilteredList: React.Dispatch<React.SetStateAction<Vehicle[]>>;
}

const EMPTY_OPTIONS_LIST = {
  level: "all",
  nation: "all",
  type: "all",
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { warShips, setFilteredList } = props;

  const [selectedOptions, setSelectedOptions] =
    useState<Options>(EMPTY_OPTIONS_LIST);

  const handleSelectChange =
    (key: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [key]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredList = listFilter(warShips, selectedOptions);
    if (filteredList) {
      setFilteredList(filteredList);
    }
  };
  return (
    <header className="App-header">
      <Flex>
        <h1> List of Warships</h1>
        <form onSubmit={handleSubmit}>
          <Flex>
            <StyledCatalogEl>
              Уровень
              <select
                value={selectedOptions.level}
                onChange={handleSelectChange("level")}
              >
                <option>all</option>
                {optionsCreator(warShips, "level").map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
            </StyledCatalogEl>
            <StyledCatalogEl>
              Страна
              <select
                value={selectedOptions.nation}
                onChange={handleSelectChange("nation")}
              >
                <option>all</option>
                {optionsCreator(warShips, "nation").map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
            </StyledCatalogEl>
            <StyledCatalogEl>
              Класс корабля
              <select
                value={selectedOptions.type}
                onChange={handleSelectChange("type")}
              >
                <option>all</option>
                {optionsCreator(warShips, "type").map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
            </StyledCatalogEl>
            <StyledButton type="submit">Поиск</StyledButton>
          </Flex>
        </form>
      </Flex>
    </header>
  );
};
