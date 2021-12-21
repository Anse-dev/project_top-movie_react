import { React, useState, useEffect } from "react";
import ApiSettings from "../Requests";
//Initial state
const { getMovies } = ApiSettings;
const initialeState = {
  results: [],
  total_pages: 0,
  total_results: [],
  page: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialeState);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(true);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const state = await getMovies(searchTerm, page);
      setState((prev) => ({
        ...state,
        results:
          page > 1 ? [...prev.results, ...state.results] : [...state.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    setState(initialeState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingBtn) return;
    setIsLoadingBtn(false);
    fetchMovies(state.page + 1, searchTerm);
  }, [isLoadingBtn, searchTerm, state.page]);
  return {
    state: state,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    isLoadingBtn,
    setIsLoadingBtn,
  };
};
