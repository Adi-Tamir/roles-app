import { useState } from "react";
import { Typography } from "@mui/material";
import { Modal, Select, Button } from "antd";
import { Knowledge } from "./types";
import { styled } from "@stitches/react";
import isAllowed from "./isAllowed";
import { testKnowledge } from "./isAllowed.test";

const MODAL_TYPES = {
  Authorization: "Authorization",
  Success: "Success",
  Failure: "Failure",
};
export function AuthorizationModal() {
  const [state, setState] = useState({ citizenName: "", place_name: "" });
  const [currentModal, setCurrentModal] = useState(MODAL_TYPES.Authorization);

  const knowledge1 : Knowledge = testKnowledge;

  const optionsCitizens = knowledge1.citizens.map((citizen)=>{ return {value: citizen.name, label: <span>{citizen.name}</span>}});

  const optionsPlaces = knowledge1.places.map((place)=>{ return {value: place.name, label: <span>{place.name}</span>}});

  const handleCheckAuthorization = () => {
    const isAuthorized = isAllowed(
      knowledge1,
      state.citizenName,
      state.place_name
    );
    if (isAuthorized) {
      setCurrentModal(MODAL_TYPES.Success);
    } else setCurrentModal(MODAL_TYPES.Failure);
  };

  const handleChangeCitizen = (e) => {
    setState({ ...state, citizenName: e.value });
  };

  const handleChangeLocation = (e) => {
    setState({ ...state, place_name: e.value });
  };

  const checkAuthorizedDisabled = !state.citizenName || !state.place_name;

//   if (error) {

//   }

  return (
    <Typography variant="h4" component="h1" gutterBottom>
      <PageContainer>
        Hello Maui
        <Modal
          title="Authorization Form"
          open={currentModal == MODAL_TYPES.Authorization}
          footer={<></>}
          onCancel={() => setCurrentModal("")}
        >
          <Row>
            <SelectTitle>Citizens</SelectTitle>
            <Select
              options={optionsCitizens}
              onChange={handleChangeCitizen}
              
            />
          </Row>
          <Row>
            <SelectTitle>Place</SelectTitle>
            <Select
              options={optionsPlaces}
              onChange={handleChangeLocation}
            />
          </Row>
          <Button
            onClick={handleCheckAuthorization}
            disabled={checkAuthorizedDisabled}
          >
            Check Authorization
          </Button>
        </Modal>
        <Button onClick={() => setCurrentModal(MODAL_TYPES.Authorization)} style={{width: '150px'}}>
          Check Authorization
        </Button>
      </PageContainer>
    </Typography>
  );
}

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});

const SelectTitle = styled("h4", { fontSize: "12px", color: "#000000" });

const PageContainer = styled('div', {display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px' });