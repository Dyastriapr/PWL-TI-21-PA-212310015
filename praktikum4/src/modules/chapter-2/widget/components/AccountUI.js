const AccountLong = ({ data, color }) => {
  return (
    <div className="my-profile d-flex align-items-center mb-2">
      <div className="d-flex flex-stack">
        <div className="symbol symbol-30px">
          <div
            className={`symbol-label fs-2 fw-bold bg-${color} text-inverse-${color} p-2 `}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "5px",
            }}
          >
            {data.name ? data.name.charAt(0) : "-"}
          </div>
        </div>
      </div>
      <div className="text-dark fw-bolder fs-7 ms-2 text-right">
        <span className="d-block">{data.name}</span>
        <span className="text-muted">
          {data.user_id ? data.user_id : data.id}
        </span>
      </div>
    </div>
  );
};
export { AccountLong };
