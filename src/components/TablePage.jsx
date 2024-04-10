import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import UpdateModal from "./UpdateModal";
import { updateData } from "../APIRequest/Apirequest";

const TablePage = ({ alldata, getOneData, getcount, getalldata }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newname, setNewName] = useState("");
  const [updateID, setUpdateID] = useState("");
  const [item, setitem] = useState("");

  async function HandleEdit(itemId, name) {
    setUpdateID(itemId);
    setNewName(name);
    onOpen(true);
  }

  const handleSave = async () => {
    try {
      const newData = { name: newname };
      const data = await updateData(updateID, newData);
      if (data.status === 200) {
        window.alert("Updated Successfull");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
    onClose();
    await getalldata();
    await getcount();
  };

  return (
    <div style={{ width: "100vw" }}>
      <Heading mb={5} textAlign={"center"}>
        Table Page
      </Heading>
      <div>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Edit Button</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alldata?.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Button onClick={() => HandleEdit(item._id, item.name)}>
                      Edit
                    </Button>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <UpdateModal
        item={item}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        setNewName={setNewName}
        newname={newname}
        updateData={handleSave}
      />
    </div>
  );
};

export default TablePage;
