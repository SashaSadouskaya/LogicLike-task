import React from "react";

type Props = {
  tags: string[];
  selectTag: (tag: string) => void;
  selectedTag: string;
};

export const SideMenu: React.FC<Props> = ({ tags, selectTag, selectedTag }) => {
  const handleSelectTag = (tag: string) => () => {
    selectTag(tag);
  };

  return (
    <div className="sidebar-container">
      <ul>
        <li
          className={selectedTag === "" ? "selected" : ""}
          onClick={handleSelectTag("")}
        >
          Все темы
        </li>
        {tags.map((tag) => (
          <li
            key={tag}
            className={selectedTag === tag ? "selected" : ""}
            onClick={handleSelectTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
