import { useEffect, useState } from "react";
import { db } from "../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { List } from "./List";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
// import { DATASET } from "../data/Dataset";

const Input = styled("input")`
  max-width: 180px;
  padding: 4px;
  height: 24px;
  border: 1px solid #7d7676;
  border-radius: 4px;
`;

export const Search = () => {
  const [list, setList] = useState([""]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  let params = useParams();

  const dataCollectionRef = collection(db, "dataset");

  // This was used only once to write data in db
  // useEffect(() => {
  //   const init = async () => {
  //     await addDoc(dataCollectionRef, { data: DATASET });
  //   };
  //   init()
  // }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      const values = data.docs.map((doc) => ({ ...doc.data() }))[0];
      console.log();
      setList(values["data"]);
    };
    if (params.search) {
      setInput(params.search.toLowerCase());
    }
    getData();
  }, []);

  useEffect(() => {
    navigate(`/${input}`);
  }, [navigate, input]);

  return (
    <>
      <Input onChange={onInputChange} placeholder="Type to search..." />
      <List listItems={list} input={input} />
    </>
  );
};
