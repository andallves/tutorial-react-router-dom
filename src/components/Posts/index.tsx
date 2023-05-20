import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Posts {`Params: ${id}`} {`QS: ${qs.get("page")}`}
        <Outlet />
      </h1>
    </div>
  );
};
