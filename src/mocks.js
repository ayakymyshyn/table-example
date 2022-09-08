export const data = [
  {
    id: 1,
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    id: 2,
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    id: 3,
    name: "Matthew",
    age: 15,
    address: "10 Downing Street",
  },
  {
    id: 4,
    name: "Harry",
    age: 21,
    address: "10 Downing Street",
  },
];

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Age (yrs)",
    dataIndex: "age",
    renderHeader: (age, handleSort) => {
      return (
        <th style={{ color: "red" }} onClick={handleSort}>
          {age}
        </th>
      );
    },
    sort: (a, b) => a.age - b.age,
  },
];
