import { ChevronRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavbarComponent from "~/components/navbar";

export default function Home() {
  return (
    <main className="bg-black] flex h-screen w-screen flex-col items-center">
      <NavbarComponent />
      <div className="grid h-full grid-cols-12 grid-rows-12 text-white">
        <div className="col-span-2 row-span-full row-start-2 overflow-scroll px-4 md:inline">
          <div className="space-y-2">
            <h1 className="pb-2">Getting Started</h1>
            <div className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>
                  <a href={"/docs"}>Introduction</a>
                </li>
                <li>
                  <a href={"/docs/quickstart"}>Quickstart</a>
                </li>
                <li>
                  <a href={"/docs/members"}>Members</a>
                </li>
                <li>
                  <a href={"/docs/organization"}>Organizations</a>
                </li>
              </ul>
              <ul className="text-[rgb(77,77,77)]">
                <li className="hover:cursor-not-allowed">
                  <a href={"/docs/api"} style={{ pointerEvents: "none" }}>
                    API
                  </a>
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

        <div className="col-span-full col-start-3 row-span-full row-start-2 space-y-6 overflow-scroll">
          <h1 className="font-bold leading-none [font-size:_clamp(2.5em,2.5vw,8em)]">
            Components
          </h1>
          <p className="text-[rgb(131,131,138)]">
            Seamlessly integrating AI brilliance to elevate information
            management. Intuitive. Adaptive. Empowering.
          </p>
          <p>
            Welcome to <strong>Inquirable</strong> the all in one solution for
            answering all of your employees questions using the brilliance of
            LM&apos;s and Context-Based Question Answering (CBQA).
          </p>
          <p className=" text-[rgb(131,131,138)]">
            Before delving into the lyrical masterpiece of these docs,
            there&apos;s one thing to consider. We place big empathies on
            customers reviews, so please, make sure to give us feedback.
          </p>
          <div>
            <h3 className="font-bold [font-size:_clamp(2.5em,2.5vw,8em)]">
              FAQ
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
