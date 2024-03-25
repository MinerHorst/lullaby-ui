import { ArrowRight } from "lucide-react";
import NavbarComponent from "~/components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#000] to-[#15162c] py-4">
      <NavbarComponent />
      <div className="grid h-full w-full grid-cols-12 grid-rows-12 pt-4 text-white">
        <div className="col-span-2 col-start-1 row-span-full row-start-1 overflow-scroll px-4 md:inline">
          <div className="space-y-2">
            <h1 className="pb-2">Installation</h1>
            <div className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>
                  <a href={"/docs"}>Create a Project</a>
                </li>
                <li>
                  <a href={"/docs/quickstart"}>Install TailwindCSS</a>
                </li>
                <li>
                  <a href={"/docs/members"}>Add Utilities</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="py-2">Integrations</h1>
            <div className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>
                  <a href={"/docs/integrations/homepage"}>Homepage</a>
                </li>
                <li>
                  <a href={"/docs/integrations/notion"}>Notion</a>
                </li>
                <li>
                  <a href={"/docs/integrations/teams"}>Microsoft Teams</a>
                </li>
                <li>
                  <a href={"/docs/integrations/shopify"}>Shopify</a>
                </li>
                <li>
                  <a href={"/docs/integrations/github"}>GitHub</a>
                </li>
                <li>
                  <a href={"/docs/integrations/clickup"}>ClickUp</a>
                </li>
              </ul>

              <ul
                className="space-y-2 text-[rgb(77,77,77)]"
                style={{ pointerEvents: "none" }}
              >
                <li className="hover:cursor-not-allowed">
                  <a href={"/docs/integrations/salesforce"}>Salesforce</a>
                </li>
                <li>
                  <a href={"/docs/integrations/yelp"}>Yelp!</a>
                </li>
                <li>
                  <a href={"/docs/integrations/trustpilot"}>Trustpilot</a>
                </li>
                <li>
                  <a href={"/docs/integrations/zoom"}>Zoom</a>
                </li>
                <li>
                  <a href={"/docs/integrations/gdocs"}>Google Docs</a>
                </li>
                <li>
                  <a href={"/docs/integrations/jira"}>Jira</a>
                </li>
                <li>
                  <a href={"/docs/integrations/asana"}>Asana</a>
                </li>
                <li>
                  <a href={"/docs/integrations/trello"}>Trello</a>
                </li>
                <li>
                  <a href={"/docs/integrations/zendesk"}>Zendesk</a>
                </li>
                <li>
                  <a href={"/docs/integrations/freshdesk"}>Freshdesk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-10 col-start-3 row-span-full row-start-1 mb-8 grid grid-cols-3 gap-4 overflow-scroll pb-4 pr-4">
          <button className="relative z-[100] col-span-3 inline-flex h-8 w-fit overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#333_0%,#333_50%,#fff_100%)]" />
            <span className="z-[20] inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">
              Custom Components <ArrowRight />
            </span>
          </button>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 aspect-square rounded-xl bg-slate-500/10 p-2 px-3"
          ></motion.div>
        </div>
      </div>
    </main>
  );
}
