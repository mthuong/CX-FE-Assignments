# Question 1 - React input example
Search github users
## Components structure

- `question1/components` store all component use in the search page
- `question1/hook` store the debounce hook to ensure that we don't execute fetch data too frequently

## My solution

- Search page will have 2 main part: SearchInput and DataTable
- In SearchInput only render the search input field
- DataTable will display all github users and split into smaller components:
  - DataTable: contain header and rows. Data table columns are defined with the `columns` prop. `columns` expects an array of objects. We can add more prop for each column via `columns` props
  - Row: contain all cells in 1 row
  - Cell: display cell data with delegate pattern to custom cell information

## Demo

https://user-images.githubusercontent.com/1086057/136911495-eb2ec8d1-db23-49c0-92cc-e8dfa1b05e1c.mov
