export const TableWithSorting = ({ dataSource, columns, onSort }) => {
  return (
    <table>
      <thead>
        {/* table header */}
        <tr>
          {columns.map((column) => {
            function handleSort() {
              if (column.sort !== undefined && onSort !== undefined) {
                const sortedData = [...dataSource.sort(column.sort)];
                onSort(sortedData);
              }
            }

            if (column.renderHeader !== undefined) {
              return column.renderHeader(column.title, handleSort);
            }

            return (
              <th key={column.title} onClick={handleSort}>
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {dataSource.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                if (column.render !== undefined) {
                  return column.render(row[column.dataIndex]);
                }

                return <td key={column.title}>{row[column.dataIndex]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// export const TableWithSorting = ({ dataSource, columns, onSort }) => {
//   return (
//     <table>
//       {/* header */}
//       <thead>
//         <tr>
//           {columns.map((column) => {
//             function handleSort() {
//               if (onSort !== undefined && column.sort !== undefined) {
//                 const sortedData = [...dataSource.sort(column.sort)];
//                 onSort(sortedData);
//               }
//             }
//             if (column.renderHeader) {
//               return column.renderHeader(column.title, handleSort);
//             }
//             return <th onClick={handleSort} style={{cursor: 'pointer'}} key={column.dataIndex}>{column.title}</th>;
//           })}
//         </tr>
//       </thead>

//       {/* body */}
//       <tbody>
//         {dataSource.map((row) => {
//           return (
//             <tr key={row.id}>
//               {columns.map((column) => {
//                 const dataToDisplay = row[column.dataIndex];

//                 if (column.render) {
//                   return column.render(dataToDisplay);
//                 }
//                 return <td key={column.dataIndex}>{dataToDisplay}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
