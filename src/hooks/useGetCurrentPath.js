import { useLocation } from "react-router-dom";


const useGetCurrentPath = () =>{
    const currentPath = useLocation().pathname;
    return currentPath;
}

export default useGetCurrentPath;