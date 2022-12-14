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
  deleted: boolean;
}

class ServicesPage extends React.Component<{}, ServicesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      services: [],
      deleted: true,
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

  refreshPage() {
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

  deleteService = (id: string) => {
    deleteRequest("services/", id);
    this.refreshPage();
  };

  addService = () => {
    this.refreshPage();
  };

  render() {
    return (
      <>
        <Title
          text="Services"
          secText="What makes BizAd the #1 app"
          cssBgc="black"
        />
        <AddBar services={this.state.services} addService={this.addService} />

        {this.state.services.length === 0 && (
          <div className={`alert alert-info`} role="alert">
            You haven't selected any services yet.
          </div>
        )}

        <Table
          services={this.state.services}
          deleteService={this.deleteService}
        />
      </>
    );
  }
}

export default ServicesPage;
