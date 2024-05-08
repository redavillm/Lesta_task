import styled from "styled-components";

const StyledCard = styled.div`
  margin-top: 30px;
  padding: 10px;
  background-color: #151d2b;
`;
const StyledDescriptionEl = styled.div`
  margin-bottom: 15px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ICard {
  title: string;
  description: string;
  icon: string;
  level: number;
  type: string;
  nation: string;
}

export const Card: React.FC<ICard> = (props) => {
  const { title, icon, level, type, nation, description } = props;
  return (
    <StyledCard>
      <h3>{title}</h3>
      <Flex>
        <img src={icon} alt="Ship`s img" />
        <div>
          <StyledDescriptionEl>Уровень: {level}</StyledDescriptionEl>
          <StyledDescriptionEl>Тип: {type}</StyledDescriptionEl>
          <StyledDescriptionEl>Страна: {nation}</StyledDescriptionEl>
          <p>{description}</p>
        </div>
      </Flex>
    </StyledCard>
  );
};
