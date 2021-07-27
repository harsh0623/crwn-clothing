import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorysection = createSelector(
    [selectDirectory],
    directory => directory.sections
)