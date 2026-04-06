import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ setSelectedPage, selectedPage }) => {
  const selectedStyles = `relative bg-primary-2 before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-primary-2 before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[45%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-primary-1"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
        aria-label="Navigate to the Home page"
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "priorityNotices" ? selectedStyles : "bg-primary-1"
        } w-3 h-3 rounded-full`}
        href="#priorityNotices"
        onClick={() => setSelectedPage("priorityNotices")}
        aria-label="Navigate to the Priority Notices section"
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "latestSchedule" ? selectedStyles : "bg-primary-1"
        } w-3 h-3 rounded-full`}
        href="#latestSchedule"
        onClick={() => setSelectedPage("latestSchedule")}
        aria-label="Navigate to the Latest Schedule section"
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "previousSchedule" ? selectedStyles : "bg-primary-1"
        } w-3 h-3 rounded-full`}
        href="#previousSchedule"
        onClick={() => setSelectedPage("previousSchedule")}
        aria-label="Navigate to the Previous Schedule section"
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-primary-1"
        } w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
        aria-label="Navigate to the About section"
      ></AnchorLink>
    </div>
  );
};
export default DotGroup;
