

export default function listItem({ dataContact, deleteList }) {
  //   const contact = dataContact.contacts;
console.log(dataContact);
  function deleteContact(e) {
    const { id } = e.target;
    deleteList(id);
  }

  
    return (
      <ul>
        {dataContact.contacts.map(obj => {
          return (
            <li key={obj.id}>
              {obj.name}: {obj.number}
              <button id={obj.id} onClick={deleteContact}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  
}
