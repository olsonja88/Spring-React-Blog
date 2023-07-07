import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name ="users" list={UserList} recordRepresentation="name" />    
  </Admin>
);

export default App;
