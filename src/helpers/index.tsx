const capitalize = (word: String) => {
  const firstLetter = word[0].toUpperCase();
  const rest = word.slice(1);
  return `${firstLetter}${rest}`;
};

const rowCreator = (data: ITableData[]) => {
  return data.map((item) => {
    const table = Object.values(item)
      .filter((value) => value !== item.id)
      .map((tableValue) => {
        return tableValue;
      });

    return (
      <tr key={item.id}>
        {table.map((value, index) => {
          return <td key={index}>{value}</td>;
        })}
      </tr>
    );
  });
};

export { capitalize, rowCreator };

interface ITableData {
  date: string;
  type: string;
  receit: string;
  id: number;
}
