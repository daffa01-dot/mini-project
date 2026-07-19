"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { me } from "@/services/auth.service";
import { useAuthStore } from "@/store/authstore";

export function useMe() {
  const setUser = useAuthStore((state) => state.setUser);

  const query = useQuery({
    queryKey: ["me"],
    queryFn: me,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 menit
  });

  useEffect(() => {
    if (query.data?.data) {
      setUser(query.data.data);
    }
  }, [query.data, setUser]);

  return query;
}