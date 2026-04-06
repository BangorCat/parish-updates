function formatIsoToUk(iso) {
  try {
    if (!iso || typeof iso !== "string") return iso;
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;

    const day = String(d.getUTCDate()).padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    const hours = String(d.getUTCHours()).padStart(2, "0");
    const mins = String(d.getUTCMinutes()).padStart(2, "0");

    return `${day} ${month} ${year}, ${hours}:${mins}`;
  } catch (e) {
    return iso;
  }
}

const PriorityNoticeEntry = ({ title, updateDate, genericInfo }) => {
  return (
    <div className="my-5 border-l-2 border-primary-3 pl-4">
      {/* Date and title  */}
      <p className="text-primary-light-3">
        Updated at: {formatIsoToUk(updateDate)}
      </p>
      <p className="text-lg font-normal">{title}</p>

      {/* Additoinal Notes:  */}
      {genericInfo != null && genericInfo.length > 0 && (
        <>
          <ul className="list-disc">
            {genericInfo.map((l, idx) => (
              <li key={idx} className="text-lg list-item ml-5">
                {l}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PriorityNoticeEntry;
