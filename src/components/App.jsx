import Menu from "modules/Menu/Menu";
import "../shared/styles/style.css"
import UserRoutes from "UserRoutes";


function App(){
  return (
    <div>
      <Menu />
        <UserRoutes/>
    </div>
  );
};

export default App
