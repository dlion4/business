import { useEffect, useState } from "react";
import { StoreProvider, useStore } from "./store";
import { QuickBar, Sidebar, Topbar } from "./shell";
import { ToastHost } from "./ui";
import { BusinessProfileSection, PageHeader, PortfolioSection, WizardsBanner } from "./profileSections";
import {
  AddDirectorModal, EditProfileWizardModal, NewBusinessWizardModal, NewRentalWizardModal,
  SectorPresetsModal, UploadDocWizardModal,
} from "./profileWizards";
import {
  ActivityDrawer, BusinessDrawer, ComplianceLevelsModal, DeactivateConfirmModal,
  DeleteBusinessConfirmModal, ExportPackModal, FolderManagerModal, HelpModal,
  KybCenterModal, ReactivateConfirmModal, ShareProfileModal, TaxRegModal,
} from "./profileDialogs";

/* ---------- modal registry — 18 functional modals ---------- */
function ModalHost() {
  const { modal, closeModal } = useStore();
  if (!modal) return null;
  const props = { payload: modal.payload, onClose: closeModal };
  switch (modal.name) {
    /* wizards */
    case "editProfile": return <EditProfileWizardModal {...props} />;
    case "uploadDoc": return <UploadDocWizardModal {...props} />;
    case "newBusiness": return <NewBusinessWizardModal {...props} />;
    case "newRental": return <NewRentalWizardModal {...props} />;
    case "sectorPresets": return <SectorPresetsModal {...props} />;
    case "addDirector": return <AddDirectorModal {...props} />;
    /* dialogs & drawers */
    case "kybCenter": return <KybCenterModal {...props} />;
    case "businessDrawer": return <BusinessDrawer {...props} />;
    case "taxReg": return <TaxRegModal {...props} />;
    case "folderManager": return <FolderManagerModal {...props} />;
    case "deactivate": return <DeactivateConfirmModal {...props} />;
    case "reactivate": return <ReactivateConfirmModal {...props} />;
    case "deleteBusiness": return <DeleteBusinessConfirmModal {...props} />;
    case "share": return <ShareProfileModal {...props} />;
    case "complianceLevels": return <ComplianceLevelsModal {...props} />;
    case "exportPack": return <ExportPackModal {...props} />;
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
        const el = document.getElementById("pf-search") as HTMLInputElement | null;
        if (el) { e.preventDefault(); el.focus(); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return;
      }
      if (e.key === "Enter" && modal) {
        const active = document.activeElement as HTMLElement | null;
        const okTag = active && (active.tagName === "TEXTAREA" || (active.tagName === "INPUT" && !["date", "checkbox", "radio", "color", "file", "range"].includes((active as HTMLInputElement).type)));
        if (okTag) {
          const footer = document.querySelector(".modal.show .modal-footer");
          const primary = footer?.querySelector(".btn-primary, .btn-success, .btn-danger, .btn-warning") as HTMLButtonElement | null;
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
          <BusinessProfileSection />
          <PortfolioSection />
          <WizardsBanner />

          <footer className="pm-footer mt-4 rounded-3 d-flex flex-wrap align-items-center gap-3" style={{ boxShadow: "var(--pm-shadow)" }}>
            <div className="flex-grow-1">
              <div className="fw-bold" style={{ fontSize: "0.84rem" }}>PayMo Business — Page 5: Business Profile &amp; KYB</div>
              <div className="pm-prod-meta">
                The control room · KYB compliance · portfolio management · Kenya-first (KRA/CBK) rails
              </div>
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge-soft green"><i className="bi bi-shield-fill-check me-1" />Level 2 KYB</span>
              <span className="badge-soft blue"><i className="bi bi-buildings me-1" />7 businesses</span>
              <span className="badge-soft amber"><i className="bi bi-people me-1" />3 directors</span>
              <span className="badge-soft violet"><i className="bi bi-magic me-1" />Sector presets</span>
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
