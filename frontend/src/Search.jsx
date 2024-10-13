import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";




export const Search = () => {
  const location = useLocation();
  const searchName = location.state.searchName.text;

  return (
    <div class="flex min-h-screen bg-slate-50">
      <h1>検索結果:{searchName}</h1>
    </div>
  );
};
