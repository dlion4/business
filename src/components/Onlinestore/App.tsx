import { useEffect, useState } from "react";
import { StoreProvider, useStore } from "./store";
import { QuickBar, Sidebar, Topbar } from "./shell";
import { ToastHost } from "./ui";
import {
  AdjustmentsCounts, CommandCenter, ExpiryBatches, LocationsLevels, PageHeader,
  PurchaseOrders, ReorderAutomation, ReturnsDamage, ValuationLedger, WizardsBanner,
} from "./inventorySections";
import {
  AdjustmentWizardModal, NewPoModal, ReceivePOWizardModal, ReorderWizardModal,
  ReturnInspectionWizardModal, StockCountWizardModal, TransferWizardModal, WriteOffWizardModal,
} from "./inventoryWizards";
import {
  ActivityDrawer, AdjustmentDetailModal, AlertsModal, BarcodeScanModal, CountDetailModal,
  ExpirySettingsModal, ExportLedgerModal, HelpModal, LocationModal, PoDrawer, ReorderSettingsModal,
  ReturnsPolicyModal, SkuDrawer, ValuationModal,
} from "./inventoryDialogs";

/* ---------- modal registry — 22 functional modals ---------- */
function ModalHost() {
  const { modal, closeModal } = useStore();
  if (!modal) return null;
  const props = { payload: modal.payload, onClose: closeModal };
  switch (modal.name) {
    /* wizards */
    case "countWizard": return <StockCountWizardModal {...props} />;
    case "transferWizard": return <TransferWizardModal {...props} />;
    case "adjustmentWizard": return <AdjustmentWizardModal {...props} />;
    case "receiveWizard": return <ReceivePOWizardModal {...props} />;
    case "reorderWizard": return <ReorderWizardModal {...props} />;
    case "writeoffWizard": return <WriteOffWizardModal {...props} />;
    case "returnWizard": return <ReturnInspectionWizardModal {...props} />;
    case "newPo": return <NewPoModal {...props} />;
    /* drawers & dialogs */
    case "sku": return <SkuDrawer {...props} />;
    case "reorderSettings": return <ReorderSettingsModal {...props} />;
    case "location": return <LocationModal {...props} />;
    case "adjustmentDetail": return <AdjustmentDetailModal {...props} />;
    case "countDetail": return <CountDetailModal {...props} />;
    case "exportLedger": return <ExportLedgerModal {...props} />;
    case "valuation": return <ValuationModal {...props} />;
    case "expirySettings": return <ExpirySettingsModal {...props} />;
    case "scan": return <BarcodeScanModal {...props} />;
    case "poDrawer": return <PoDrawer {...props} />;
    case "returnsPolicy": return <ReturnsPolicyModal {...props} />;
    case "alerts": return <AlertsModal {...props} />;
    case "help": return <HelpModal {...props} />;
    case "activity": return <ActivityDrawer {...props} />;
    default: return null;
  }
}

/* ---------- page ---------- */
function Page() {
  const { modal, closeModal } = useStore();
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key === "/" && !modal) {
        const el = document.getElementById("inv-search") as HTMLInputElement | null;
        if (el) { e.preventDefault(); el.focus(); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return;
      }
      if (e.key === "Enter" && modal) {
        const active = document.activeElement as HTMLElement | null;
        const okTag = active && (active.tagName === "TEXTAREA" || (active.tagName === "INPUT" && !["date", "checkbox", "radio", "color", "file"].includes((active as HTMLInputElement).type)));
        if (okTag) {
          const footer = document.querySelector(".modal.show .modal-footer");
          const primary = footer?.querySelector(".btn-primary, .btn-success, .btn-danger") as HTMLButtonElement | null;
          if (primary && !primary.disabled) { e.preventDefault(); primary.click(); }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal, closeModal]);

  return (
    <>
      <Sidebar open={sideOpen} onClose={() => setSideOpen(false)} />
      <div className="pm-main">
        <Topbar onMenu={() => setSideOpen(true)} />
        <main className="pm-content">
          <PageHeader />
          <CommandCenter />
          <LocationsLevels />
          <AdjustmentsCounts />
          <PurchaseOrders />
          <ReorderAutomation />
          <ValuationLedger />
          <ExpiryBatches />
          <ReturnsDamage />
          <WizardsBanner />

          {/* footer */}
          <footer className="pm-footer mt-4 rounded-3 d-flex flex-wrap align-items-center gap-3" style={{ boxShadow: "var(--pm-shadow)" }}>
            <div className="flex-grow-1">
              <div className="fw-bold" style={{ fontSize: "0.84rem" }}>PayMo Business — Page 8: Inventory &amp; Stock</div>
              <div className="pm-prod-meta">
                Built on the PayMo superapp pattern · central ledger · multi-business aware · Kenya-first rails
              </div>
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge-soft green"><i className="bi bi-journal-check me-1" />Ledger-synced</span>
              <span className="badge-soft blue"><i className="bi bi-phone me-1" />M-Pesa rails</span>
              <span className="badge-soft amber"><i className="bi bi-shield-check me-1" />KRA compliant</span>
              <span className="badge-soft violet"><i className="bi bi-boxes me-1" />4 locations</span>
            </div>
          </footer>
        </main>
      </div>
      <QuickBar />
      <ModalHost />
      <ToastHost />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Page />
    </StoreProvider>
  );
}
