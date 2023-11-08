export const filterByProperty = (
  property: string,
  state: string,
  data: any[]
) => {
  return data.filter((item) => item[property] === state);
};
