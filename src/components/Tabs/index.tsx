import React from "react";
import "./styles.scss";
import { TabsProps } from "./types";
import Item from "./components/Item";
import Icon from "../Icon";

export default function Tabs({ labels = [], icon = undefined }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const labelsLength = labels.length;

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  function renderTabs() {
    return labels.map((tab, index) => {
      let classNameItem = "";

      if (index === 0) {
        // first tab
        classNameItem = "first-tab";
      } else if (index === labelsLength - 1) {
        // last tab
        classNameItem = "last-tab";
      } else {
        // middle tab
        classNameItem = "middle-tab";
      }

      return (
        <Item
          key={`Tabs_${index}`}
          index={index}
          classNameItem={classNameItem}
          label={tab}
          onClick={handleClick}
          isSelected={selectedIndex === index}
        />
      );
    });
  }

  return !labelsLength ? null : (
    <div className="Tabs">
      {icon && <Icon icon={icon} />}
      <ul className="items">{renderTabs()}</ul>
    </div>
  );
}
