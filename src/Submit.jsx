import { useSearchParams } from "react-router-dom";

const Submit = () =>{
    let [search,setSearch] = useSearchParams();
    return (
      <div className="card flex-card">
        <img  src="/illustration-thank-you.svg" alt="" />
        <p className="selected-text">
          You selected {search.get("value")} out of 5
        </p>
        <h1 className="thank">Thank You!</h1>
        <p className="body-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    );
}
export default Submit;