import "./App.css";
import { useState, useEffect } from "react";
import FromPage from "./components/FromPage";
import ShowCount from "./components/ShowCount";
import TablePage from "./components/TablePage";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { HStack, VStack } from "@chakra-ui/react";
import {
  getCount,
  getAllData,
  getSingleData,
  updateData,
} from "./APIRequest/Apirequest";

function App() {
  const [addCount, setAddCount] = useState(0);
  const [alldata, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    getcount();
    getalldata();
  }, []);

  async function getcount() {
    const data = await getCount();
    setAddCount(data[0].addCount);
    setUpdateCount(data[0].updateCount);
  }

  async function getalldata() {
    const data = await getAllData();
    setAllData(data);
  }

  const HandleSubmitButton = async (e) => {
    e.preventDefault();
    if (name !== "") {
      const res = await fetch("https://dataneuron-m6yg.onrender.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name }),
      });
      if (res.status === 201) {
        window.alert("Added Successfull");
      } else {
        window.alert("Something went wrong");
      }
    } else {
      window.alert("Can't Add Blank Name");
    }
    getcount();
    getalldata();
    setName("");
  };

  return (
    <div style={{ width: "100vw", padding: "0px", margin: "0px" }}>
      {/* <PanelGroup autoSaveId="example" direction="vertical">
        <VStack>
        <HStack>
          <Panel defaultSizePercentage={50}>
            <FromPage />
          </Panel>
          <PanelResizeHandle />
          <Panel>
            <ShowCount />
          </Panel>
        </HStack>
        <PanelResizeHandle />
          <div>
            <Panel defaultSizePercentage={50}>
              <TablePage />
            </Panel>
          </div>
        </VStack>
      </PanelGroup> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <FromPage
          HandleSubmitButton={HandleSubmitButton}
          setName={setName}
          name={name}
        />
        <ShowCount addCount={addCount} updateCount={updateCount} />
      </div>
      <TablePage
        alldata={alldata}
        getcount={getcount}
        getalldata={getalldata}
      />
    </div>
  );
}

export default App;
