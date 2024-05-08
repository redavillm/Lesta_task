import { Options, Vehicle } from "../interfaces";

export const listFilter = (arr: Vehicle[], selectedOptions: Options) => {
  try {
    const { level, nation, type } = selectedOptions;

    return arr.filter(
      (el) =>
        (level === "all" || el.level === +level) &&
        (nation === "all" || el.nation.title === nation) &&
        (type === "all" || el.type.title === type)
    );
  } catch (error) {
    console.log(error);
  }
};
