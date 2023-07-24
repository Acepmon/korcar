import data from '../data';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  return data.filter((car) => {
    if (query.id) {
      return car.id === query.id;
    }
    return true;
  });
});