import React from "react";
import { deleteRequest, getRequest } from "../../services/apiService";
import Title from "../Title/Title";
import AddBar from "./AddBar/AddBar";
import Table from "./Table/Table";

export type badgeType = "active" | "disabled";

export type ServiceType = {
  _id: string;
  service: string;
  description: string;
  status: badgeType;
};

interface ServicesState {
  services: Array<ServiceType>;
}

class Services extends React.Component<{}, ServicesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    const res = getRequest(`services/`);
    if (!res) {
      return;
    }

    res
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          services: json,
        }));
      });
  }

  deleteAndUpdate = (id: string) => {
    deleteRequest("services/", id);
    const res = getRequest(`services/`);
    if (!res) {
      return;
    }
    res
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          services: json,
        }));
      });
  };

  render() {
    return (
      <>
        <Title
          text="Services"
          secText="What makes BizAd the #1 app"
          cssBgc="black"
        />
        <AddBar />

        <Table
          services={this.state.services}
          deleteService={this.deleteAndUpdate}
        />
      </>
    );
  }
}

export default Services;
