import React, { useEffect, useState } from "react";
import { Heading, Text } from "@chakra-ui/react";

const ShowCount = ({ addCount, updateCount }) => {
  return (
    <div style={{ width: "45vw", marginTop: "50px" }}>
      <Heading mb={5} textAlign={"center"}>
        ShowCount
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Text>Add Count : {addCount} </Text>
        <Text>Update Count : {updateCount} </Text>
      </div>
    </div>
  );
};

export default ShowCount;
