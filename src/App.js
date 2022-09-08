import { useEffect, useState } from "react";
import { TableWithSorting } from "./components";

import { data, columns } from "./mocks";

// TODO:
// 1. Simple Table Component
// 2. Custom render of cells implementation
// 3. Add sorting functionality

function App() {
  const [userData, setUserData] = useState(data);

  return (
    <div className="App">
      <TableWithSorting
        dataSource={userData}
        columns={columns}
        onSort={(sortedData) => setUserData(sortedData)}
      />
    </div>
  );
}

export default App;
