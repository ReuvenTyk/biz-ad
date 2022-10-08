import React from "react";
import { Link } from "react-router-dom";

export type CardType = {
  _id: string;
  bizNum: string;
  name: string;
  description: string;
  phone: string;
  address: string;
  imgUrl: string;
  webUrl: string;
};

interface Props {
  data: CardType;
  nameChangeSearch: Function;
}

class Card extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div className="card border-0 m-4 shadow bg-dark bg-opacity-10">
        <img src={data.imgUrl} alt={data.name} className="card-img-top" />
        <div className="badge text-bg-light border border-dark">
          {data.bizNum}
        </div>
        <div className="card-body">
          <div className="card-title">{data.name}</div>
          <div className="card-text">{data.description}</div>
          <hr />
          <div className="card-text">{data.phone}</div>
          <hr />
          <div className="card-text">{data.address}</div>
          <hr />
          <Link to={data.webUrl} state={data} className="btn btn-primary">
            Visit Website
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
