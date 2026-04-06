const SpecialEntry = ({ title, genericInfo }) => {
  return (
    <div className="my-5 border-l-2 border-primary-2 pl-4">
      {/* Date and title  */}
      <p className="font-normal">{title}</p>

      {/* Additoinal Notes:  */}
      {genericInfo != null && genericInfo.length > 0 && (
        <>
          <ul className="list-disc">
            {genericInfo.map((l, idx) => (
              <li key={idx} className="list-item ml-5">
                {l}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SpecialEntry;
