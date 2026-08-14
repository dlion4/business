import { useState } from "react";
import { useStore } from "./store";
import { BUSINESSES } from "./data";

interface NavItem { icon: string; label: string; badge?: string; active?: boolean }
const NAV: { group: string; items: NavItem[] }[] = [
  { group: "Money In", items: [
    { icon: "bi-cash-coin", label: "Get Paid", badge: "12 due" },
    { icon: "bi-people", label: "Customers & CRM" },
  ]},
  { group: "Money Out", items: [
    { icon: "bi-truck", label: "Pay Suppliers", badge: "3 POs" },
  ]},
  { group: "Your Money", items: [
    { icon: "bi-bank", label: "Cash & Accounts" },
    { icon: "bi-journal-bookmark", label: "Bookkeeping & Taxes" },
  ]},
  { group: "Your Business", items: [
    { icon: "bi-box-seam", label: "Products & Store" },
    { icon: "bi-boxes", label: "Inventory & Stock" },
  ]},
  { group: "Grow", items: [
    { icon: "bi-lightning-charge", label: "Funding & Credit" },
    { icon: "bi-shield-check", label: "Insurance & Protection" },
    { icon: "bi-megaphone", label: "Marketing & Growth" },
    { icon: "bi-puzzle", label: "Apps & Integrations", active: true },
  ]},
  { group: "Run", items: [
    { icon: "bi-buildings", label: "Multi-Business Portfolio" },
    { icon: "bi-gear", label: "Business Profile & KYB" },
    { icon: "bi-people", label: "Team & Roles" },
    { icon: "bi-shield-exclamation", label: "Disputes & Support" },
    { icon: "bi-bell", label: "Notifications" },
    { icon: "bi-database", label: "Data & Privacy" },
  ]},
];

const PAGE_BY_LABEL: Record<string, string> = {
  Dashboard: "dashboard",
  "Get Paid": "getpaid",
  "Customers & CRM": "crm",
  "Pay Suppliers": "paysuppliers",
  "Cash & Accounts": "cash",
  "Bookkeeping & Taxes": "books",
  "Products & Store": "productstore",
  "Inventory & Stock": "inventory",
  "Funding & Credit": "funding",
  "Insurance & Protection": "insurance",
  "Marketing & Growth": "marketing",
  "Apps & Integrations": "integrations",
  "Multi-Business Portfolio": "portfolio",
  "Business Profile & KYB": "profile",
  "Team & Roles": "team",
  "Disputes & Support": "disputes",
  Notifications: "notifications",
  "Data & Privacy": "data",
};

export function Sidebar({ open, onClose, onNavigate }: { open: boolean; onClose: () => void; onNavigate?: (p: string) => void }) {
  const { toast, business } = useStore();
  return (
    <>
      {open && <div className="pm-overlay d-lg-none" onClick={onClose} />}
      <aside className={`pm-sidebar ${open ? "open" : ""}`}>
        <div className="pm-brand">
          <div className="pm-brand-logo">P</div>
          <div>
            <div className="pm-brand-name">PayMo Business</div>
            <div className="pm-brand-sub">Page 13 · Apps &amp; Integrations</div>
          </div>
        </div>
        <div className="pm-nav-wrap">
          {NAV.map((g) => (
            <div key={g.group}>
              <div className="pm-nav-group">{g.group.toUpperCase()}</div>
              {g.items.map((it) => (
                <a
                  key={it.label}
                  className={`pm-nav-item ${it.active ? "active" : ""}`}
                  onClick={() => {
                    onClose();
                    if (it.active) return;
                    const target = PAGE_BY_LABEL[it.label];
                    if (target && onNavigate) {
                      onNavigate(target);
                      return;
                    }
                    toast(`Navigation to "${it.label}" ships in its own page.`, "info", "PayMo demo");
                  }}
                >
                  <i className={`bi ${it.icon}`} />
                  <span>{it.label}</span>
                  {it.badge ? (
                    <span className="badge-soft amber ms-auto">{it.badge}</span>
                  ) : (
                    <i className="bi bi-chevron-right ms-auto" style={{ fontSize: "0.65rem", color: "#4b5a70" }} />
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="pm-sidebar-foot">
          <div className="pm-upgrade">
            <div className="d-flex align-items-center gap-2 mb-1">
              <i className="bi bi-puzzle" style={{ color: "#ffd66b" }} />
              <span className="fw-bold">Everything talks to PayMo</span>
            </div>
            Daraja, eTIMS, Zapier &amp; webhooks — 23 apps connected, sync failures auto-retried.
          </div>
          <div className="pm-user-row" onClick={() => toast("Signed in as Wanjiku M. — owner of " + business + ".", "info", "Profile")}>
            <div className="pm-avatar" style={{ width: 30, height: 30, fontSize: "0.7rem" }}>WM</div>
            <div className="flex-grow-1" style={{ lineHeight: 1.2 }}>
              <div className="fw-semibold" style={{ fontSize: "0.78rem" }}>Wanjiku Maina</div>
              <div style={{ fontSize: "0.66rem", color: "#7b8aa3" }}>Owner · {business}</div>
            </div>
            <i className="bi bi-box-arrow-right" style={{ fontSize: "0.8rem", color: "#7b8aa3" }} />
          </div>
        </div>
      </aside>
    </>
  );
}

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const { business, setBusiness, notifications, markNotifsRead, dismissNotif, openModal, toast, searchQuery, setSearchQuery } = useStore();
  const [bellOpen, setBellOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const unread = notifications.filter((n) => n.unread).length;

  return (
    <header className="pm-topbar">
      <button type="button" className="btn btn-outline-secondary btn-sm pm-burger" onClick={onMenu}>
        <i className="bi bi-list" />
      </button>
      <div className="pm-crumb d-none d-md-block">
        Grow / <b>Apps &amp; Integrations</b>
      </div>
      <div className="ms-auto d-flex align-items-center gap-2">
        <div className="pm-search-box d-none d-lg-block">
          <i className="bi bi-search" />
          <input
            id="apps-search"
            className="form-control form-control-sm"
            style={{ width: 240 }}
            placeholder="Search apps, webhooks, APIs…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Notifications */}
        <div className="pm-dd">
          <button type="button" className="pm-bell" onClick={() => setBellOpen((v) => !v)} aria-label="Notifications">
            <i className="bi bi-bell" />
            {unread > 0 && <span className="nub">{unread}</span>}
          </button>
          {bellOpen && (
            <>
              <div className="pm-overlay" onClick={() => setBellOpen(false)} />
              <div className="pm-dd-menu" style={{ width: 330, right: 0 }}>
                <div className="d-flex justify-content-between align-items-center px-2 py-2">
                  <span className="fw-bold" style={{ fontSize: "0.85rem" }}>Notifications</span>
                  <button type="button" className="btn btn-link btn-sm p-0" style={{ fontSize: "0.72rem" }} onClick={() => { markNotifsRead(); toast("All notifications marked as read", "info"); }}>
                    Mark all read
                  </button>
                </div>
                {notifications.map((n) => (
                  <div key={n.id} className="pm-dd-item" style={{ alignItems: "flex-start", opacity: n.unread ? 1 : 0.6 }}>
                    <i className={`bi ${n.icon}`} style={{ color: n.unread ? "var(--pm-green)" : "#98a2b3", marginTop: 2 }} />
                    <div className="flex-grow-1">
                      <div style={{ fontSize: "0.78rem", whiteSpace: "normal" }}>{n.text}</div>
                      <div style={{ fontSize: "0.66rem", color: "var(--pm-muted)" }}>{n.time}</div>
                    </div>
                    <button type="button" className="btn-close" style={{ fontSize: "0.5rem" }} onClick={() => dismissNotif(n.id)} />
                  </div>
                ))}
                <hr />
                <button type="button" className="pm-dd-item justify-content-center" onClick={() => { setBellOpen(false); openModal("help"); }}>
                  <i className="bi bi-sliders" /> Notification settings
                </button>
              </div>
            </>
          )}
        </div>

        {/* Business switcher */}
        <div className="pm-dd">
          <button type="button" className="pm-bizchip" onClick={() => setBizOpen((v) => !v)}>
            <span style={{ fontSize: "0.95rem" }}>🛍️</span>
            <span className="d-none d-sm-inline">{business}</span>
            <i className="bi bi-chevron-down" style={{ fontSize: "0.65rem", color: "var(--pm-muted)" }} />
          </button>
          {bizOpen && (
            <>
              <div className="pm-overlay" onClick={() => setBizOpen(false)} />
              <div className="pm-dd-menu" style={{ width: 260, right: 0 }}>
                <div className="px-2 py-1" style={{ fontSize: "0.66rem", color: "var(--pm-muted)", fontWeight: 700, letterSpacing: "0.08em" }}>
                  SWITCH BUSINESS
                </div>
                {BUSINESSES.map((b) => (
                  <button
                    key={b.name}
                    type="button"
                    className="pm-dd-item"
                    onClick={() => {
                      setBizOpen(false);
                      if (business === b.name) return;
                      setBusiness(b.name);
                      toast(`Context switched to ${b.name}. Connected apps and webhooks now scoped to this entity.`, "info", "Business switched");
                    }}
                  >
                    <span>{b.emoji}</span>
                    <span className="flex-grow-1">
                      <span className="d-block fw-semibold" style={{ fontSize: "0.8rem" }}>{b.name}</span>
                      <span style={{ fontSize: "0.66rem", color: "var(--pm-muted)" }}>{b.type}</span>
                    </span>
                    {business === b.name && <i className="bi bi-check-lg text-primary" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Account */}
        <div className="pm-dd">
          <button type="button" className="pm-avatar" style={{ border: "none", cursor: "pointer" }} onClick={() => setAccOpen((v) => !v)}>
            WM
          </button>
          {accOpen && (
            <>
              <div className="pm-overlay" onClick={() => setAccOpen(false)} />
              <div className="pm-dd-menu" style={{ width: 210, right: 0 }}>
                <button type="button" className="pm-dd-item" onClick={() => { setAccOpen(false); openModal("activity"); }}><i className="bi bi-clock-history" /> Activity log</button>
                <button type="button" className="pm-dd-item" onClick={() => { setAccOpen(false); openModal("apiDocs"); }}><i className="bi bi-file-code" /> API docs</button>
                <button type="button" className="pm-dd-item" onClick={() => { setAccOpen(false); openModal("help"); }}><i className="bi bi-question-circle" /> Help &amp; shortcuts</button>
                <hr />
                <button type="button" className="pm-dd-item danger" onClick={() => { setAccOpen(false); toast("Signed out of the demo session.", "info"); }}><i className="bi bi-box-arrow-right" /> Sign out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function QuickBar() {
  const { openModal } = useStore();
  return (
    <nav className="pm-quickbar" aria-label="Quick actions">
      <button type="button" className="primary" onClick={() => openModal("installWizard")}>
        <i className="bi bi-plus-lg" /> Install App
      </button>
      <button type="button" onClick={() => openModal("webhookWizard")}>
        <i className="bi bi-hdd-network" /> New Webhook
      </button>
      <button type="button" onClick={() => openModal("apiKeyWizard")}>
        <i className="bi bi-key" /> API Key
      </button>
      <button type="button" onClick={() => openModal("automationWizard")}>
        <i className="bi bi-magic" /> Automation
      </button>
      <button type="button" onClick={() => openModal("marketplace")}>
        <i className="bi bi-shop" /> Marketplace
      </button>
      <button type="button" onClick={() => openModal("help")}>
        <i className="bi bi-question-circle" /> Help
      </button>
    </nav>
  );
}
