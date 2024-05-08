import styled from "styled-components";
import { Vehicle } from "../interfaces";
import { Card } from "./Card";

const StyledList = styled.div`
  margin: 0px auto;
`;

interface ShipsListProps {
  filtredList: Vehicle[];
  warShips: Vehicle[];
}

export const ShipsList: React.FC<ShipsListProps> = (props) => {
  const { warShips, filtredList } = props;

  return (
    <StyledList>
      {filtredList.length !== 0
        ? filtredList.map((el) => (
            <Card
              title={el.title}
              icon={el.icons.medium}
              level={el.level}
              type={el.type.title}
              nation={el.nation.title}
              description={el.description}
            />
          ))
        : warShips.map((el) => (
            <Card
              title={el.title}
              icon={el.icons.medium}
              level={el.level}
              type={el.type.title}
              nation={el.nation.title}
              description={el.description}
            />
          ))}
    </StyledList>
  );
};
