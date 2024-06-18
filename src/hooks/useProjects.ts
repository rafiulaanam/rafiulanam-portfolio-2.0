import { useCreateProMutation, useDeleteProMutation, useGetProItemsQuery } from "@/redux/features/project/projectApi";
import { getProjectSuccess } from "@/redux/features/project/projectSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const useProjects = () => {
  const { data: getProjectsFromDB, isLoading } = useGetProItemsQuery(undefined);
  const [createPro, createProResult] = useCreateProMutation();
  const [deletePro] = useDeleteProMutation();
  const dispatch = useAppDispatch();
  const { currentProject } = useAppSelector((state) => state.project);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (getProjectsFromDB) {
          dispatch(getProjectSuccess(getProjectsFromDB));
        } else {
          dispatch(getProjectSuccess(null));
        }
      } catch (error) {
        throw new Error("Projects not fetched");
      }
    };
    fetchProjects();
  }, [getProjectsFromDB, dispatch]);

  return {
    getProjectsFromDB,
    isLoading,
    currentProject,
    createPro,
    createProResult,
    deletePro,
  };
};

export default useProjects;
