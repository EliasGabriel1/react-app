import { DataProvider } from '../../Context/context';
import Cards from '../../Components/Grid';

function index() {
  return (
      <DataProvider>
        <Cards/>
      </DataProvider>
  );
}

export default index;
