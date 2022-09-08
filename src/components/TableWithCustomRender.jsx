export const TableWithCustomRender = ({ dataSource, columns }) => {
  return (
    <table>
      <thead>
        {/* table header */}
        <tr>
          {columns.map((column) => {
            if (column.renderHeader !== undefined) {
              return column.renderHeader(column.title);
            }

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

// export const TableWithCustomRender = ({ dataSource, columns }) => {
//   return (
//     <table>
//       {/* header */}
//       <thead>
//         <tr>
//           {columns.map((column) => {
//             if (column.renderHeader) {
//               return column.renderHeader(column.title);
//             }
//             return <th>{column.title}</th>;
//           })}
//         </tr>
//       </thead>

//       {/* body */}
//       <tbody>
//         {dataSource.map((row) => {
//           return (
//             <tr>
//               {columns.map((column) => {
//                 const dataToDisplay = row[column.dataIndex];

//                 if (column.render) {
//                   return column.render(dataToDisplay);
//                 }
//                 return <td>{dataToDisplay}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
