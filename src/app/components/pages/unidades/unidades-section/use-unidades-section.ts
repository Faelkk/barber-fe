"use client";

import { useState } from "react";

export function useUnidadesSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return { searchQuery, handleSearchChange };
}
