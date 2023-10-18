const capitalize = (word: String) => {
  const firstLetter = word[0].toUpperCase();
  const rest = word.slice(1);
  return `${firstLetter}${rest}`;
};

const titleCreator = (data: ITableData[]) => {
  return Object.keys(data[0])
    .filter((key) => key !== "id")
    .map((key) => {
      return <th key={key}>{capitalize(key)}</th>;
    });
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
          if (index === table.length - 1) {
            return (
              <td key={index}>
                <button>{value}</button>
              </td>
            );
          }

          return <td key={index}>{value}</td>;
        })}
      </tr>
    );
  });
};

export { capitalize, rowCreator, titleCreator };

interface ITableData {
  date: string;
  type: string;
  receit: string;
  id: number;
}
