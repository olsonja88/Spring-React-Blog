import { Admin, Resource } from "react-admin";
import { dataProvider } from "./components/dataProvider";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./components/authProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate} />
    <Resource name ="users" list={UserList} icon={UserIcon} recordRepresentation="name" />    
  </Admin>
);

export default App;
