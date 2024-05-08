import { Vehicle } from "../interfaces";

export const optionsCreator = (arr: Vehicle[], value: string) => {
  try {
    const optionsdResult: (number | string)[] = [];

    switch (value) {
      case "level":
        arr.forEach((el: Vehicle) => optionsdResult.push(el.level));
        break;
      case "nation":
        arr.forEach((el: Vehicle) => optionsdResult.push(el.nation.title));
        break;
      case "type":
        arr.forEach((el: Vehicle) => optionsdResult.push(el.type.title));
        break;
      default:
        break;
    }

    return Array.from(
      new Set(
        optionsdResult.sort((a, b) => {
          if (typeof a === "string" && typeof b === "string") {
            return (a as string).localeCompare(b as string);
          } else {
            return (a as number) - (b as number);
          }
        })
      )
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};
