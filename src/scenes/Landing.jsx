import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery(`(min-width:1060px)`);
  const btnAnimationGradient = `bg-gradient-animation-2 bg-size-300 bg-position-100 hover:bg-position-50 transition-all ease-linear duration-[500ms]`;

  return (
    <section
      id="home"
      className="flex py-24 flex-col justify-center items-start  min-h-[100dvh]"
    >
      <div className="flex md:flex-row flex-col md:gap-16 ">
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-3/5 z-10 "
        >
          <p className="text-4xl font-title uppercase text-primary-1">
            Bangor & Caernarfon <br />
            Catholic Service Update
            <br />
            <i className="text-2xl">(Unofficial)</i>
          </p>
          {/* )} */}
        </motion.div>
        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 md:mt-0 mt-12">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} //half div in view
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-xl">
              <strong>
                Unofficial schedule of Masses, events, readings, and
                remembrances
                <br />
                updated as needed or monthly.
              </strong>
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
        </div>
      </div>
      <motion.div
        className="flex mt-5 justify-center md:justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} //half div in view
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="">
          Although a printed newsletter is provided in person, schedules
          sometimes change; when updates or cancellations are not reflected in
          the printed newsletter, the site provides timely notices so visitors
          can learn when services are cancelled, rescheduled, or otherwise
          changed.
        </p>
      </motion.div>
    </section>
  );
};

export default Landing;
