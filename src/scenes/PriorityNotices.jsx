import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient3";
import { useState, useEffect } from "react";
import PriorityNoticeEntry from "../components/PriorityNoticeEntry";

var url =
  "https://raw.githubusercontent.com/BangorCat/data/refs/heads/main/priorityNotices.json";

const PriorityNotices = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [priorityNotices, setPriorityNotices] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        const json = await res.json();
        if (mounted) setPriorityNotices(json);
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="priorityNotices"
      className="gap-16 py-32 flex flex-col z-10 md:flex md:flex-row text-left  md:items-start"
    >
      {/* FIRST ROW */}
      <motion.div
        className="inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedPage("priorityNotices")}
      >
        {/* /TITLE - PRIORITY NOTICES  */}
        <p className="font-title mb-2 font-black text-5xl uppercase text-primary-3">
          Priority Notices
        </p>
        <div className="flex justify-start my-5">
          <LineGradient width="w-2/5" />
        </div>
        {/* URGENT MESSAGES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mb-16"
        >
          {/* Priority Notices Entires */}
          <div className="my-5">
            <p className=" text-2xl font-bold">
              {priorityNotices?.priorityNoticesTitle == undefined
                ? "Something went wrong"
                : " "}
              {priorityNotices?.priorityEntries?.length === 0
                ? "Everything up to date"
                : ""}
            </p>
            {priorityNotices?.priorityEntries?.map((e) => (
              <PriorityNoticeEntry
                key={e.date + e.title + e.id}
                title={e.title}
                updateDate={e.updateDate}
                genericInfo={e.genericInfo}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PriorityNotices;
