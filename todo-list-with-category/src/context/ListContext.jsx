import { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  let [list, setList] = useState({
    id: 1,
    priorityLevel: "",
    isMarkAsDone: false,
    isEdited: false,
    category: "",
    todoValue: "",
  });

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
