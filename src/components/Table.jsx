export const Table = ({ dataSource, columns }) => {
  return (
    <table>
      <thead>
        {/* table header */}
        <tr>
          {columns.map((column) => {
            return <th key={column.title}>{column.title}</th>;
          })}
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {dataSource.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                return <td key={column.title}>{row[column.dataIndex]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
