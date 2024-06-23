import './App.css';
import TableUsers from './components/table-users/TableUsers';
import axiosApi from './api';
import { useEffect, useState } from 'react';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await axiosApi.get("/users");
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  console.log(data);

  return (
    <>
      {isLoading ? <Loader center size='md' content="Loading..." /> : <TableUsers users={data} />}
    </>
  );
}

export default App;
