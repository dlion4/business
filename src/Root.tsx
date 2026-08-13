import { useState } from "react";
import App from "./App";
import AppPay from "./AppPay";
import AppCash from "./AppCash";
import AppBooks from "./AppBooks";
import AppCrm from "./AppCrm";
import type { QAction } from "./lib";

export type PageId = "getpaid" | "paysuppliers" | "cash" | "books" | "crm";

export default function Root() {
  const [page, setPage] = useState<PageId>("getpaid");
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

  return page === "getpaid" ? <App onNavigate={go} pendingAction={pending} />
    : page === "paysuppliers" ? <AppPay onNavigate={go} />
    : page === "cash" ? <AppCash onNavigate={go} />
    : page === "books" ? <AppBooks onNavigate={go} />
    : <AppCrm onNavigate={go} />;
}
