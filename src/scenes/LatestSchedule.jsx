import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient1";
import { useState, useEffect } from "react";
import DayEntry from "../components/DayEntry";
import SpecialEntry from "../components/SpecialEntry";

var url =
  "https://raw.githubusercontent.com/BangorCat/data/refs/heads/main/latestSchedule.json";

const LatestSchedule = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [latestScheduleData, setLatestScheduleData] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        const json = await res.json();
        if (mounted) setLatestScheduleData(json);
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="latestSchedule" className="gap-16 py-32 flex flex-col  z-10">
      <div className="md:flex md:flex-row md:items-start gap-20">
        <motion.div
          className="inline-block text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage("latestSchedule")}
        >
          {/* /Month */}
          <div className="mb-10">
            <p className="font-title mb-2 font-black text-5xl uppercase max-w-screen-sm ">
              <span className="text-primary-1">Latest Schedule</span>
              <br />
              {latestScheduleData?.latestScheduleTitle ??
                "something went wrong"}
            </p>
            <div className="flex justify-start my-5">
              <LineGradient width="w-3/5" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-16"
            >
              {/* DAY DETAILS */}
              <div className="my-5">
                {latestScheduleData?.days?.map((e) => (
                  <DayEntry
                    key={e.date + e.title + e.id}
                    title={e.title}
                    date={e.date}
                    eventList={e.eventList}
                    genericInfo={e.genericInfo}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* MONTH SPECIAL INFO */}
          <div className="mb-10">
            <p className="font-title mb-2 font-black text-3xl uppercase max-w-screen-sm text-primary-1">
              {latestScheduleData?.specialEntries?.length > 0
                ? "Other Information"
                : "something went wrong"}
            </p>
            <div className="flex justify-start my-5">
              <LineGradient width="w-1/4" />
            </div>
            {latestScheduleData?.specialEntries?.map((e) => (
              <SpecialEntry
                key={e.date + e.title + e.id}
                title={e.title}
                genericInfo={e.genericInfo}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestSchedule;
