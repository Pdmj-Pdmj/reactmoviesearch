export const movieDetailsAction = (movDetail) => {
  return {
    type: "movieDetail",
    payLoad: movDetail,
  };
};
export const searchTextAction = (searchText) => {
  return {
    type: "searchText",
    payLoad: searchText,
  };
};
