import { useState } from "react";
import App from "./AppGetpaid";
import AppPay from "./AppPay";
import AppCash from "./AppCash";
import AppBooks from "./AppBooks";
import AppCrm from "./AppCrm";
import AppDashboard from "./AppDashboard";
import AppProductstore from "./AppProductstore";
import AppOnlinestore from "./AppOnlinestore";
import AppMarketing from "./AppMarketing";
import type { QAction } from "./lib";

export type PageId = "dashboard" | "getpaid" | "paysuppliers" | "cash" | "books" | "crm" | "productstore" | "inventory" | "marketing";

export default function Root() {
  const [page, setPage] = useState<PageId>("dashboard");
  const [pending, setPending] = useState<QAction>(null);

  const go = (p: PageId, anchor?: string, action?: QAction) => {
    setPending(action ?? null);
    setPage(p);
    window.scrollTo(0, 0);
    if (anchor) {
      window.setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  return page === "dashboard" ? <AppDashboard onNavigate={go} />
    : page === "getpaid" ? <App onNavigate={go} pendingAction={pending} />
    : page === "paysuppliers" ? <AppPay onNavigate={go} />
    : page === "cash" ? <AppCash onNavigate={go} />
    : page === "books" ? <AppBooks onNavigate={go} />
    : page === "crm" ? <AppCrm onNavigate={go} />
    : page === "productstore" ? <AppProductstore onNavigate={go} />
    : page === "inventory" ? <AppOnlinestore onNavigate={go} />
    : <AppMarketing onNavigate={go} />;
}
