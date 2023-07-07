import { 
    Datagrid, 
    List, 
    ReferenceField, 
    TextField, 
    EditButton,
    Edit,
    Create, 
    ReferenceInput, 
    SimpleForm, 
    TextInput,
    useRecordContext
} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />   
        </Datagrid>
    </List>
);

export const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
);
