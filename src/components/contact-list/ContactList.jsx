export default function listItem({ dataContact, deleteList }) {
  const contact = dataContact.contacts;

  function deleteContact(e) {
    const {id} = e.target;
    deleteList(id);
  };

  return (
    <ul>
      {contact.map(obj => {
        return (
          <li key={obj.id}>
            {obj.name}: {obj.number}
            <button id={obj.id} onClick={deleteContact}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
