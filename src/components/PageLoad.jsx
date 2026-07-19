import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const PageLoader = ({ children }) => {

    const location = useLocation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 550);

        return () => clearTimeout(timer);

    }, [location.pathname]);

    if (loading) {

        return <Loading />;

    }

    return children;

}

export default PageLoader;