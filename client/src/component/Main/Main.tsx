import React from "react";
import { getRequest } from "../../services/apiService";
import Card, { CardType } from "../Card/Card";
import Title from "../Title/Title";
import "./Main.css";

export enum displayMode {
  grid = "grid",
  list = "list",
}

interface MenuProps {
  defaultDisplay: displayMode;
}

interface MenuState {
  display: displayMode;
  cards: Array<CardType>;
  filteredByName: Array<CardType>;
  selectedSearch: string;
  nameSearch: String;
  sortDir: 1 | -1;
  fileName: string | null;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    this.state = {
      display: props.defaultDisplay,
      cards: [],
      filteredByName: [],
      selectedSearch: "",
      nameSearch: "",
      sortDir: 1,
      fileName: null,
    };
  }

  componentDidMount() {
    const res = getRequest("cards/");
    if (!res) {
      return;
    }

    res
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          cards: json,
          filteredByName: json,
        }));
      });
  }

  sortDishes = () => {
    const newDir = this.state.sortDir === 1 ? -1 : 1;

    this.setState(() => ({
      sortDir: newDir,
    }));

    const res = getRequest(`cards/sort/${newDir}`);
    if (!res) return;

    res
      .then((res) => res.json())
      .then((json) => {
        const filtered = this.filterByName(this.state.selectedSearch, [
          ...json,
        ]);

        this.setState(() => ({
          cards: json,
          filteredByName: filtered,
        }));
      });
  };

  changeDisplay = (mode: displayMode) => {
    this.setState((state, props) => ({
      display: mode,
    }));
  };

  filterByName = (
    category: string,
    cards: Array<CardType>
  ): Array<CardType> => {
    if (category === "") {
      return cards;
    }

    return cards.filter((card) => {
      return card.name === category;
    });
  };

  nameChangeSearch = (selected: string) => {
    const filtered = this.filterByName(selected, [...this.state.cards]);

    this.setState((state, props) => ({
      filteredByName: filtered,
      selectedSearch: selected,
    }));
  };

  displayBtnCss = (mode: displayMode): string => {
    return mode === this.state.display ? "btn-secondary" : "btn-default";
  };

  closeMessage = () => {
    this.setState(() => ({
      fileName: null,
    }));
  };

  render() {
    if (this.state.filteredByName.length === 0)
      return <p>No Businesses to show</p>;

    return (
      <>
        <Title text="Biz Ad" secText="Advertising your business" />

        <div className="d-flex justify-content-between px-5">
          <div className="d-flex align-items-center">
            <label className="pe-2">Category:</label>
            <input
              onChange={(e) => this.nameChangeSearch(e.target.value)}
              value={this.state.selectedSearch}
              className="form-select text-capitalize"
            ></input>

            <button onClick={this.sortDishes} className="btn btn-default mx-4">
              Name {this.state.sortDir === 1 ? "(A-Z)" : "(Z-A)"}
            </button>

            <button
              onClick={(e) => this.changeDisplay(displayMode.list)}
              className={`btn ${this.displayBtnCss(displayMode.list)}`}
            >
              <i className="bi-list-ul"></i>
            </button>
            <button
              onClick={(e) => this.changeDisplay(displayMode.grid)}
              className={`btn ${this.displayBtnCss(displayMode.grid)}`}
            >
              <i className="bi-grid-3x3-gap-fill"></i>
            </button>
          </div>
        </div>

        <div className={this.state.display}>
          {this.state.filteredByName.map((card) => (
            <Card
              key={card._id}
              data={card}
              nameChangeSearch={this.nameChangeSearch}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Menu;
