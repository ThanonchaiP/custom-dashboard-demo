export const tableColumns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address",
  },
];

export const tableData = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
  year: new Date().getFullYear(),
  platform: `PC-${i}`,
  publisher: `Microsoft`,
}));
