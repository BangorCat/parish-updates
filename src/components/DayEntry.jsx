const DayEntry = ({ date, title, eventList, genericInfo }) => {
  return (
    <div className="mb-7 border-l-2 border-primary-2 pl-4">
      {/* Date and title  */}
      <p className="text-lg font-normal ">
        <span className="font-bold"> {date}</span> - {title}
      </p>

      {/* service/event list: when-where-what */}
      <ul className="list-disc">
        {eventList.map((l) => (
          <li key={l} className="ml-5 list-item">
            <i>
              {l.when} {l.where}
            </i>
            : {l.what}
          </li>
        ))}
      </ul>

      {/* Additoinal Notes:  */}
      {genericInfo != null && genericInfo.length > 0 && (
        <>
          <p className="mt-2 font-normal">Additional notes:</p>
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

export default DayEntry;
