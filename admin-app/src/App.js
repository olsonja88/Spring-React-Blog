import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Dashboard } from "./Dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate} />
    <Resource name ="users" list={UserList} icon={UserIcon} recordRepresentation="name" />    
  </Admin>
);

export default App;
