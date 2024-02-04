"use client";

import type {Category} from "@/types";

import Link from "next/link";
import {useState} from "react";

function CatergoryItem({category, categories}: {category: Category; categories: Category[]}) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((value) => !value);

  const hasSubcategories = categories.filter(({parentId}) => {
    return category.id === parentId;
  }).length;

  return (
    <li className="ml-4">
      {hasSubcategories ? (
        <button className="mr-1 text-white" type="button" onClick={handleClick}>
          {expanded ? "-" : "+"}
        </button>
      ) : null}
      <Link href={`/${category.id}`}> {category.name}</Link>
      {expanded ? <ListOfCategories categories={categories} parentCategory={category.id} /> : null}
    </li>
  );
}

export default function ListOfCategories({
  categories,
  parentCategory = null,
}: {
  categories: Category[];
  parentCategory?: string | null;
}) {
  const categoriesToRender = categories.filter(({parentId}) => {
    return parentCategory === parentId;
  });

  return (
    <ul>
      {categoriesToRender.map((category) => {
        return <CatergoryItem key={category.id} categories={categories} category={category} />;
      })}
    </ul>
  );
}
