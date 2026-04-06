import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = ({ setSelectedPage }) => {
  return (
    <footer id="about" className="bg-primary-2 bg-gradient-1 p-10">
      <div className="w-5/6 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center font-semibold ">
          <p className="text-md text-dark-1">
            This site is run by a volunteer to share nonprofit information for
            our community. Content is published under responsible use—no
            copyrighted or harmful material—and personal data is not collected
            without consent. <br />
            &copy;{new Date(Date.now()).getFullYear()} WK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
