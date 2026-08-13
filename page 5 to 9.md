# PAGES 5 to 10: 

**Absorbs:** Onboarding (3.12) + Settings (3.14) + Support/Disputes (3.13)
**Zone:** ⚙️ Run
**Mental model for the user:** *"How my business is set up, who has access, how secure we are, and where to get help when something goes wrong."*
**Core thesis:** This is the control room. It's not the most exciting page, but it's the most critical for trust, compliance, and operational stability. A misconfigured setting here can break payments, create security vulnerabilities, or cause KRA non-compliance. The page must be organized so that routine settings (business profile, notifications) are easy to find, while dangerous settings (approval thresholds, team roles, security) require deliberate navigation and confirmation.

---
## page 5
## Section  — Business Profile & KYB (Know Your Business)

**What it contains:**
The master identity and compliance record for the business. This is the data that PayMo, KRA, CBK, and banks use to identify and verify the business. It's also the data that appears on invoices, receipts, and customer-facing communications.

**Business Identity Card (Top):**
- Business Name (legal name as per registration certificate)
- Trading Name (if different — e.g., legal name "TechSolutions Limited", trading name "TechSol")
- Business Registration Number (e.g., "PPT/2024/123456")
- KRA PIN (with verification status: "Verified ✓" or "Unverified ✗ — click to verify via iTax")
- Entity Type: Sole Proprietorship / Limited Company / Partnership / NGO / SACCO / Trust
- Registration Date
- Physical Address
- County / Sub-County
- Business Email (primary contact for PayMo and KRA)
- Business Phone (primary contact for customers and PayMo)
- Business Logo (uploaded, appears on invoices and payment pages)
- Brand Colors (primary and secondary — used for payment link pages, customer portal, invoice templates)

**KYB (Know Your Business) Compliance Status:**
- A compliance checklist required by CBK and PayMo's internal risk policies:
  - ☐ Certificate of Incorporation uploaded (PDF/image)
  - ☐ KRA PIN Certificate uploaded
  - ☐ CR12 (Business Registration Summary) uploaded — must be < 6 months old
  - ☐ Memorandum & Articles of Association (for companies) or Partnership Deed
  - ☐ Director/Owner KRA PINs uploaded
  - ☐ Director/Owner ID copies uploaded
  - ☐ Beneficial Ownership Declaration (CBK requirement — who actually owns/controls the business)
  - ☐ Business premises proof (lease agreement, title deed, or utility bill in business name)
  - ☐ Bank account verification (a small deposit was made and confirmed — proves the business owns the bank account)
- Each item shows status: ✅ Verified, ⏳ Under Review, ❌ Missing/Expired
- Overall compliance level: "Level 1 (Basic)" — limited transaction limits. "Level 2 (Full)" — full limits. "Level 3 (Enhanced)" — for high-volume businesses
- "Submit for Review" button when all documents are uploaded — sends to PayMo's compliance team for verification

**Business Details (Editable):**
- **Contact Information**: primary contact person (name, phone, email), alternative contact, business website, social media links
- **Industry & Sector**: dropdown (Retail, Technology, Agriculture, Services, Manufacturing, Real Estate, NGO, etc.) + sub-sector — used for compliance rules and benchmarking
- **Financial Year End**: month (December for most, but some businesses use March, June, etc.) — critical for tax calculations and year-end reporting
- **Tax Registration Details**:
  - VAT registration: Yes/No, VAT Registration Certificate #, Effective Date
  - PAYE registration: Yes/No
  - NSSF employer #: Yes/No, NSSF number
  - SHIF employer #: Yes/No
  - Turnover tax: applicable if below threshold (auto-detected)
- **Invoice Defaults**: default payment terms (e.g., 30 days), default invoice notes, default payment instructions text, default invoice template (Professional/Simple/Retail)

**Sector Presets:**
- When the entity type or industry is selected, the system offers a preset: "Apply [Sector] preset?"
- Example: selecting "Real Estate / Rental" preset:
  - Changes default invoice terms to "Due on 1st of month"
  - Adds "Rent Income" and "Property Maintenance" to Chart of Accounts
  - Activates "Security Deposits" tracking
  - Suggests creating a "Rent Collections" Virtual Account
  - Adds property-specific fields to the business profile
- The preset is a starting point — the user can undo any individual change

**Detailed information & data points:**
- Business profile data is used across the platform: the logo appears on invoices (Get Paid), the KRA PIN appears on tax returns (Bookkeeping & Taxes), the trading name appears on payment links (Get Paid), the brand colors appear on the customer portal
- KYB documents are stored encrypted and are only accessible to PayMo's compliance team and the business's admin users
- Document expiry tracking: CR12 expires after 6 months, some permits expire annually. The system tracks expiry dates and proactively notifies the business to re-upload: "Your CR12 expires in 30 days. Please upload a new one to maintain Level 2 compliance."
- Compliance level directly affects platform limits: Level 1 (basic KYB) = KES 300K/day transaction limit. Level 2 (full KYB) = KES 5M/day. Level 3 (enhanced) = KES 20M/day. Upgrading compliance unlocks higher limits
- For multi-business: each business in the portfolio has its own profile and KYB. The portfolio owner can view all profiles but editing requires business-level admin access

**Reason this section exists:**
The business profile is the "single source of truth" for who this business is. Without it, every invoice has wrong details, every tax return has the wrong PIN, and every payment link looks generic. The KYB section is non-negotiable for a financial platform — CBK requires PayMo to verify its customers' businesses, and the level of verification determines the transaction limits. By making the KYB checklist visual and progress-tracked, the business owner understands *why* they're uploading a CR12 (to unlock higher limits) instead of seeing it as bureaucratic red tape. The sector presets are a massive time-saver: a property manager selecting "Real Estate" preset gets a platform tailored to rentals in 2 clicks, instead of configuring 20 different settings manually. The document expiry tracking prevents the embarrassing "your compliance level was downgraded because your CR12 expired" surprise.

---

## Section — Multi-Business Portfolio Management

**What it contains:**
The command center for users who own or manage multiple businesses (or multiple rental properties) under one PayMo login. This section manages the business list, the switcher behavior, and cross-business settings. (Note: the detailed per-business views, consolidated P&L, and inter-company transfers live on the dedicated Portfolio page — this section is for *management and configuration* of the portfolio).

**Business List & Creation:**
- Cards for each business in the portfolio:
  - Business Name + Logo
  - Entity Type badge
  - Status: Active, Inactive, Suspended (compliance issue)
  - Key metrics snapshot: Total Cash, This Month's Revenue, This Month's Expenses
  - Last active: "Last transaction: 2 hours ago" or "Inactive for 30 days"
  - Actions: Switch to this business (sets it as `currentBusinessKey`), Edit Profile, View Full Dashboard (links to Overview page scoped to this business), Deactivate, Delete (only if no transaction history)
- "Add New Business" button: starts a mini onboarding wizard (name, type, KRA PIN, basic details) — the full KYB can be completed later
- "Add Rental Property" button: starts a specialized wizard for property entities (property name, address, unit count, monthly rent per unit, tenant details) — pre-configures the business for rental management

**Portfolio Grouping:**
- Businesses can be organized into groups/folders:
  - "My Businesses" (operating companies)
  - "Rental Properties" (each property is a separate business entity)
  - "Client Projects" (for agencies that run separate books per client)
  - Custom groups: user-created
- Drag-and-drop to move businesses between groups
- Group-level metrics: total cash across all businesses in the group, consolidated revenue, consolidated expenses

**Business Switcher Configuration:**
- The shell's sidebar business switcher (the dropdown that sets `currentBusinessKey`) is configured here:
  - Which businesses appear in the switcher (all, or only selected ones — useful if the user has 20 properties but only actively manages 5)
  - Default business: which one is selected on login
  - Switcher display format: "Name only", "Name + Type", "Name + Cash Balance"

**Cross-Business Settings:**
- **User Access Matrix**: which users have access to which businesses (links to Team & Roles, Section 5.3, but shown here at a portfolio level):
  - Table: User Name | Business A | Business B | Property 1 | Property 2 | Property 3
  - Cells show: "Admin", "Viewer", "No Access" — click to change
  - "Grant access to all businesses" checkbox for portfolio-level users (e.g., the owner's accountant)
- **Inter-company Transfer Rules**: can businesses transfer money between each other? "Yes, with approval" or "No" — prevents unauthorized fund movements
- **Consolidated Reporting**: enable/disable consolidated P&L, Balance Sheet, and Tax reports across the portfolio (links to Portfolio page)

**Portfolio Activity Feed:**
- A unified timeline showing key events across all businesses:
  - "TechSol: Invoice #INV-0234 paid — KES 50,000 received"
  - "Property 3 (Kilimani): Rent from John Mwangi overdue by 5 days"
  - "TS Retail: Payroll of KES 500,000 executed"
  - Filterable by business, event type, and date

**Detailed information & data points:**
- Adding a business to the portfolio creates a completely separate data partition: separate GL, separate CoA, separate transactions, separate tax profile. The only shared data is at the portfolio level (users, consolidated reports)
- The "Add Rental Property" wizard creates a business entity pre-configured with: a "Rent Income" CoA, recurring invoice templates per tenant, a "Rent Collections" virtual account, and tenant profiles in the CRM
- Business deletion is a hard block if any transactions exist — instead, the business is "Deactivated" (no new transactions allowed, but historical data is preserved)
- The portfolio activity feed is powered by the same audit trail (Section 4.9) but filtered and formatted for a business-owner audience (friendly language, not audit-speak)
- Maximum portfolio size: configurable by PayMo based on the user's plan (e.g., Basic: 1 business, Pro: 5 businesses, Enterprise: unlimited)

**Reason this section exists:**
The multi-business/portfolio use case is the unlock for property owners, holding companies, and serial entrepreneurs. Without it, a landlord with 5 houses needs 5 separate PayMo accounts (5 logins, 5 dashboards, no consolidated view — impossible to manage). With it, they have one login, a sidebar switcher to flip between properties, and a consolidated view of their entire portfolio's performance. The grouping feature (Businesses vs. Properties vs. Projects) acknowledges that these are fundamentally different use cases with different mental models. The user access matrix is critical for trust: the property owner wants to see all 5 properties, but the caretaker for Property 3 should ONLY see Property 3. The "Add Rental Property" wizard is the on-ramp for the most common multi-business use case in Kenya — it removes the friction of setting up a new business entity for each house.

---






## Section — Payment & Invoicing Configuration

**What it contains:**
All the default settings that govern how the business gets paid and how its invoices look/behave. These are the "set it once, forget it" settings that affect the day-to-day experience on the Get Paid page.

**Payment Method Configuration:**
- Per-channel settings:
  - **M-Pesa Paybill**: Paybill number (assigned by PayMo), account reference format advice ("Use invoice number as account reference"), callback URL (technical — pre-configured by PayMo, shown for transparency)
  - **M-Pesa Till**: Till number (assigned by PayMo), Lipa na M-Pesa settings
  - **Bank Transfer**: default bank account for transfers (selected from Cash & Accounts linked banks), PesaLink code display
  - **Card Payments**: card acceptance terms (online only, or online + POS), card brands accepted (Visa, Mastercard)
  - **QR Payments**: QR code format (static vs. dynamic default), supported wallets
  - **Payment Links**: default link expiry (7 days, 14 days, 30 days, never), default link landing page theme

**Fee Bearer Settings:**
- For each payment method: who bears the transaction fee?
  - "Business absorbs the fee" (customer pays the invoiced amount, business receives amount minus fee)
  - "Customer bears the fee" (customer pays invoiced amount + fee — the fee is added at checkout/payment)
  - "Split" (business absorbs X%, customer pays Y%)
- Default: "Business absorbs" (most common, least friction for the customer)
- This setting can be overridden per-invoice if needed

**Invoice Template & Branding:**
- Template selector: Professional (clean, corporate), Simple (minimal, for small businesses), Retail (receipt-style, for POS/instant invoices)
- **Live preview**: shows the selected template with the business's actual data (logo, name, address, Paybill, bank details) as it will appear to the customer
- **Customization**:
  - Logo position and size
  - Primary and accent colors (matches brand colors from Business Profile)
  - Font selection (from a curated list of professional fonts)
  - Show/hide fields: "Show KRA PIN on invoice?", "Show payment terms?", "Show customer's KRA PIN?", "Show eTIMS QR code?" (eTIMS QR is mandatory if eTIMS is enabled)
  - Footer text: "Thank you for your business" or custom message
  - Attachments: auto-attach terms & conditions PDF to every invoice

**Default Payment Terms:**
- Default due date: "On Receipt", "15 Days", "30 Days", "60 Days", "End of Month following invoice date", "Custom"
- Late payment penalty: "Apply X% late fee after Y days overdue" — if enabled, the system automatically adds the penalty to overdue invoices and shows it on statements
- Early payment discount: "Offer X% discount if paid within Y days" — shown on the invoice as "2/10 Net 30" (2% discount if paid within 10 days, full amount due in 30 days)

**Receipt & Notification Settings:**
- **Auto-receipt**: "Automatically send a payment receipt to the customer when a payment is received" — toggle on/off
- **Receipt channels**: Email, SMS, WhatsApp — select which channels to use (and in what order of preference)
- **Receipt template**: customize the receipt message (similar to invoice template but shorter)
- **Invoice send tracking**: "Notify me when a customer opens my invoice email" — toggle on/off

**Numbering Formats:**
- Invoice number prefix and format: "INV-", "TS-2025-", custom
- Starting number: "Next invoice will be #INV-0234"
- Payment link reference format
- Receipt number format
- "Prevent duplicate numbers" toggle (always on — cannot be disabled)

**Detailed information & data points:**
- Invoice templates are rendered server-side as PDFs using a templating engine — the live preview uses the same engine, so what the user sees is exactly what the customer gets
- Fee bearer settings affect the payment checkout flow: if "Customer bears the fee", the checkout page shows "Amount: KES 10,000 + Fee: KES 50 = Total: KES 10,050"
- Late payment penalties are calculated automatically but are NOT added to the invoice without the business owner's review — they appear as "Suggested penalty" that the owner can apply or waive
- Early payment discounts affect the receivables tracking: if a customer takes the discount, the invoice is marked as "Paid (with discount)" and the discount amount is recorded as a separate expense line
- Numbering formats are per-business: if the user has 5 businesses in the portfolio, each can have its own invoice prefix ("TS-" for TechSol, "KR-" for Kilimani Rentals, etc.)

**Reason this section exists:**
These are the settings that the business owner sets up once during onboarding and then never thinks about again — but if they're wrong, every invoice and every payment is affected. The invoice template is the business's public face: a professional, branded invoice builds trust with customers; a generic, unbranded one looks amateur. The fee bearer setting is a business decision that has a direct financial impact: if the business absorbs KES 50 per transaction and does 1,000 transactions a month, that's KES 50,000/month in fees. If they pass it to the customer, it's zero. The late payment penalty and early payment discount are tools most SMEs never use because they're hard to calculate manually — automated, they become powerful levers for improving cash flow. The receipt auto-send ensures the customer gets proof of payment instantly, reducing "did you get my money?" calls.

---











## page 6
## Section  — Team Management & Roles (RBAC)

**What it contains:**
The access control system — defining who can do what on the platform. This is Role-Based Access Control (RBAC) with PayMo-specific roles and customizable permissions. It's the difference between "everyone can approve payments" (dangerous) and "only the director can approve above KES 100K" (safe).

**User List:**
- Table: User Name, Email, Phone, Role(s), Businesses Access (which businesses in the portfolio this user can see), Status (Active, Invited, Suspended), Last Login, Actions
- Filters: role, status, business access
- Search: by name or email
- **Invite User**: "Invite" button sends an email/SMS with a signup link. The invited user creates their own password and is automatically assigned the selected role and business access
- **Bulk Invite**: upload CSV with names, emails, roles — sends all invites at once

**Pre-Built Roles:**
- **Owner**: full access to everything. Can manage team, settings, and compliance. Cannot be removed (there must always be at least one Owner). Only the Owner can delete the business.
- **Admin**: full access to business operations (invoices, payments, bookkeeping, reports) but cannot manage team members, change business profile, or modify compliance settings. Can approve payments within their limits.
- **Accountant**: full access to Bookkeeping & Taxes (GL, reports, reconciliation, month-end close) and read-only access to Get Paid and Pay Suppliers (to see the transactions that feed the ledger). Cannot initiate or approve payments. Cannot change settings.
- **Finance Manager**: full access to Pay Suppliers (initiate, approve within limits) and Cash & Accounts. Read-only access to Bookkeeping & Taxes. Cannot change settings or manage team.
- **Sales/Collections**: full access to Get Paid (create invoices, send reminders, view collections) and Customers & CRM. No access to Pay Suppliers, Cash & Accounts, Bookkeeping, or Settings.
- **HR/Payroll**: access to Pay Suppliers' Payroll section only. Can run payroll, manage employee records. No access to other payments, collections, or bookkeeping.
- **Viewer**: read-only access to everything they have business access to. Cannot create, edit, approve, or delete anything. Useful for external accountants, auditors, or partners.
- **Custom Role**: create a new role with granular permissions (see below)

**Granular Permissions (for Custom Roles):**
- Organized by page/section:
  - **Get Paid**: Create Invoices, Send Invoices, Delete Invoices, View Collections, Manage Payment Methods, Process Refunds, View Analytics
  - **Pay Suppliers**: Initiate Payments, Approve Payments (below threshold), Approve Payments (above threshold), Run Payroll, Manage Suppliers, View Payment History
  - **Cash & Accounts**: View Balances, Initiate Transfers, Manage Virtual Accounts, Manage Sweep Rules, View Investments, Reconcile
  - **Bookkeeping & Taxes**: View Ledger, Create Manual Journals, View Reports, Close Month, File Tax Returns, View Audit Trail
  - **Settings**: Edit Business Profile, Manage Team, Manage Integrations, Manage Compliance
- Each permission is a toggle: Allow / Deny
- "Copy from existing role" button to use a pre-built role as a starting point

**Approval Authority Matrix:**
- Configures WHO can approve WHAT:
  - Table: Payment Type | Amount Range | Required Approver Role(s) | Number of Approvals
  - Example rows:
    - "Supplier Payment" | "KES 0 – 10,000" | "Auto-approve" | 0
    - "Supplier Payment" | "KES 10,001 – 100,000" | "Finance Manager or Admin" | 1
    - "Supplier Payment" | "KES 100,001 – 500,000" | "Admin" | 1
    - "Supplier Payment" | "Above KES 500,000" | "Owner + Admin" | 2
    - "Payroll" | "Any amount" | "HR/Payroll + Finance Manager" | 2
    - "Refund" | "Any amount" | "Admin" | 1
    - "Sweep Rule" | "Above KES 1M" | "Owner" | 1
- This matrix directly powers the Approval Queue (Pay Suppliers, Section 2.1)

**User Activity & Session Management:**
- Per-user activity summary: "John Mwangi: Last login 2 hours ago from Chrome/Windows. Actions this month: 45 invoices created, 12 payments approved."
- **Active Sessions**: list of devices/sessions where the user is currently logged in — "Chrome on Windows (Nairobi), Safari on iPhone (Nairobi)"
- **Force Logout**: terminate a user's session immediately (e.g., if they left their computer unlocked or were terminated)
- **Suspend User**: temporarily disable access without deleting the account — "User suspended. Reason: Under investigation. Suspended by: [Admin name]."

**Detailed information & data points:**
- RBAC is enforced at the API level — even if a user bypasses the UI and calls the API directly, the permissions are checked and the request is denied if unauthorized
- A user can have different roles in different businesses within a portfolio: "John is Admin in TechSol but Viewer in Property 3"
- The approval authority matrix is evaluated in real-time when a payment is submitted: the system checks the amount, type, and matches it to the matrix to determine the required approval chain
- When a user is invited and hasn't accepted yet, they appear as "Invited" with a "Resend Invite" action and a "Revoke Invite" action
- Password policy for invited users: minimum 8 characters, must include uppercase, lowercase, and number. Enforced on first login
- For businesses using the Integrations page: API keys are scoped to the user's role — an API key created by a "Sales" role user can only access Get Paid endpoints

**Reason this section exists:**
Access control is how a business scales. With one user (the owner), RBAC doesn't matter. With 5 users (owner, accountant, sales clerk, HR, finance manager), RBAC is essential — the sales clerk shouldn't see payroll, the HR shouldn't approve supplier payments, and the accountant shouldn't change the business profile. Without RBAC, the owner either (a) shares their login (no accountability — who did what?) or (b) doesn't give anyone else access (bottleneck — the owner must do everything). The pre-built roles solve the "I don't know what permissions to set" problem — select "Accountant" and the permissions are configured correctly out of the box. The approval authority matrix translates the business's internal policies into platform enforcement: "In our company, the director must approve anything above KES 100K" becomes a matrix row that the system enforces. The session management (force logout, suspend) is the emergency response: if an employee leaves abruptly, the owner can lock them out in 2 seconds.

---


---------------

## page 7

## Section  — Support Center & Dispute Management

**What it contains:**
The help and issue resolution hub. This combines self-service support (knowledge base, FAQs) with direct support channels (chat, email, phone) and a formal dispute tracking system for payment and compliance disputes.

**Self-Service Knowledge Base:**
- **Search bar**: "How do I...", "Why is my payment failing...", "How to file VAT..." — searches all help articles
- **Categorized articles**:
  - Getting Started (onboarding, first invoice, first payment)
  - Getting Paid (payment methods, invoicing, QR, links)
  - Paying Out (suppliers, payroll, approvals)
  - Cash & Accounts (bank connections, virtual accounts, FX)
  - Bookkeeping & Taxes (ledger, reports, KRA, eTIMS)
  - Settings & Security (team, MFA, integrations)
  - Troubleshooting (payment failures, eTIMS errors, bank sync issues)
- **Video tutorials**: embedded short videos (1–3 minutes) for common tasks
- **Interactive guides**: step-by-step walkthroughs that highlight the actual UI elements on the page (for first-time users)

**Contact Support:**
- **Live Chat**: in-app chat widget (bottom-right corner, persistent across all pages). Connects to a human agent during business hours, or to a chatbot after hours
- **Email Support**: "support@paymo.biz" with a form to categorize the issue (Payments, Taxes, Technical, Account, Feature Request) and attach screenshots
- **Phone Support**: "Call us" button shows the phone number and available hours (8 AM – 6 PM EAT, Mon–Fri). Option for callback: "Request a callback — we'll call you within 30 minutes"
- **Support ticket tracking**: "My Tickets" sub-tab showing all submitted tickets with status (Open, In Progress, Waiting for Info, Resolved, Closed), assigned agent, last update

**Dispute Management (Formal):**
- Separate from general support tickets — disputes are for:
  - Payment disputes (customer claims they didn't receive goods/service, card chargebacks)
  - Transaction disputes (amount is wrong, duplicate transaction, unauthorized transaction)
  - Compliance disputes (KRA penalty that the business believes is incorrect, eTIMS rejection that the business believes is a KRA system error)
- **Dispute Form**:
  - Dispute Type: dropdown
  - Related Transaction: search and select the payment/invoice/return involved
  - Amount in Dispute: KES
  - Your Position: detailed description of why you're disputing
  - Supporting Evidence: upload documents (delivery proof, communication logs, contracts, KRA notices)
  - Desired Resolution: "Reverse transaction", "Provide evidence to card network", "Waive penalty", "Other"
- **Dispute Tracker**: table of all disputes with columns: Dispute ID, Type, Amount, Status (Opened → Under Investigation → Evidence Submitted → Resolved → Closed), Created Date, Resolution Date, Outcome
- **Dispute Detail**: full timeline of the dispute — every communication, every evidence submission, every status change. The business can add additional evidence at any time during the investigation
- **SLA Display**: "Card chargeback disputes: response required within 7 days. Time remaining: 5 days." — shows the deadline clearly

**System Status Page:**
- Real-time status of PayMo's services:
  - M-Pesa Collections: "Operational ✓" or "Degraded Performance ⚠" or "Outage ✗"
  - Bank Connections: "Operational ✓"
  - eTIMS Integration: "Operational ✓" or "KRA eTIMS system down ⚠ (outside our control)"
  - Card Payments: "Operational ✓"
  - API: "Operational ✓"
- Incident history: "March 20: M-Pesa Collections intermittent for 45 minutes. Resolved."
- "Subscribe to updates": get email/SMS when there's an outage

**Detailed information & data points:**
- The knowledge base is powered by a headless CMS that allows PayMo's content team to update articles without a code deploy
- Chat bot uses a combination of keyword matching and LLM to answer common questions — if it can't answer, it routes to a human agent with the conversation history
- Support tickets and disputes are separate entities in the database: tickets are for general help, disputes have specific legal/compliance workflows and SLAs
- Disputes involving card networks (chargebacks) have hard deadlines set by Visa/Mastercard (typically 7–10 days to respond). The SLA display counts down in real-time and escalates to a manager if the deadline is approaching and no response has been submitted
- System status data comes from PayMo's internal monitoring (Datadog, or similar) — updated every 60 seconds
- For Enterprise customers: the support section shows a dedicated "Account Manager" contact and a priority support queue with faster response times

**Reason this section exists:**
When something goes wrong — a payment fails, KRA rejects an eTIMS invoice, the user can't connect their bank — the user needs help immediately. Without a robust support section, they call the owner's personal phone, post on Twitter, or just leave. The self-service knowledge base handles 70% of questions without human intervention ("How do I create an invoice?" → article). The live chat handles the remaining 30% that need a human. The dispute management system is critical because disputes have legal and financial deadlines — a missed chargeback deadline means automatic loss of the money. By providing a structured dispute form with evidence upload and SLA tracking, PayMo ensures the business doesn't lose money due to process failures. The system status page prevents "Is it just me or is the whole system down?" anxiety — the user checks the status page and sees "M-Pesa Collections: Degraded Performance — we're working on it."

---


---------------------

## page 8: Notifications Center
## Section  — Notifications & Communication Preferences

**What it contains:**
The control panel for how and when PayMo communicates with the business owner and their team. This ensures the user gets the right notifications through the right channel without being spammed.

**Notification Channels:**
- **In-App**: bell icon in the shell header. Shows a dropdown of recent notifications. Badge shows unread count. All notifications appear here regardless of other channel settings.
- **Email**: sent to the user's registered email
- **SMS**: sent to the user's registered phone
- **Push Notification**: sent to the PayMo mobile app (if installed) or browser push (if using the web app)
- **WhatsApp**: sent to the user's WhatsApp number (for critical alerts only — payment failures, security alerts, tax deadlines)

**Notification Categories & Toggles:**
Each category can be individually toggled on/off for each channel:

- **Payments Received**: "A payment of KES X was received from [customer] via [method]"
  - In-App: On, Email: Daily Digest, SMS: Off, Push: On, WhatsApp: Off
- **Payments Failed**: "A payment of KES X from [customer] failed. Reason: [reason]"
  - In-App: On, Email: Immediate, SMS: On, Push: On, WhatsApp: On
- **Invoice Events**: "Invoice #INV-0234 was viewed by [customer]", "Invoice #INV-0234 is overdue"
  - In-App: On, Email: Daily Digest, SMS: Off, Push: On, WhatsApp: Off
- **Approval Required**: "Payment request #1234 requires your approval"
  - In-App: On, Email: Immediate, SMS: On (if > KES 50K), Push: On, WhatsApp: On (if > KES 100K)
- **Tax Deadlines**: "VAT return due in 5 days. Estimated: KES X"
  - In-App: On, Email: 7 days before, 3 days before, 1 day before, SMS: 1 day before, Push: On, WhatsApp: 1 day before
- **Security Alerts**: "New login from unknown device", "MFA disabled"
  - In-App: On, Email: Immediate, SMS: Immediate, Push: Immediate, WhatsApp: Immediate
- **System Updates**: "New feature: Inventory Management now available", "Scheduled maintenance: Saturday 2–4 AM"
  - In-App: On, Email: Weekly Digest, SMS: Off, Push: Off, WhatsApp: Off
- **Team Activity**: "John Mwangi created 5 invoices", "Jane Wanjiku approved a payment of KES X"
  - In-App: On (for Admins), Email: Off, SMS: Off, Push: Off, WhatsApp: Off

**Quiet Hours:**
- "Don't send SMS/Push/WhatsApp notifications between [10 PM] and [7 AM]" — ensures the owner isn't woken at 3 AM by a "payment received" notification
- Security alerts override quiet hours (always delivered immediately)

**Notification History:**
- Table of all notifications sent in the last 30 days: Date/Time, Category, Message, Channel(s) Delivered, Read Status (for in-app: read/unread)
- "Mark all as read" button
- Filter by category and channel

**Detailed information & data points:**
- Notifications are generated by event listeners across the platform — when a payment callback comes in, an event is published, and the notification service fans it out to the configured channels
- Email digest mode collects all notifications in a category over a period (e.g., 24 hours) and sends a single summary email: "You received 15 payments totaling KES 450,000 today. 2 invoices are overdue."
- SMS notifications are subject to cost — each SMS costs PayMo money. The default settings minimize SMS usage (only for critical alerts) to keep the platform's costs sustainable. Businesses that want SMS for everything can enable it, but a warning shows: "Enabling SMS for all payment received notifications will send ~50 SMS/month. Standard SMS rates apply."
- Push notifications use the Web Push API (for web) and Firebase Cloud Messaging (for mobile app) — they require the user to grant permission in their browser/device
- WhatsApp notifications use the WhatsApp Business API and are reserved for critical alerts due to per-message costs

**Reason this section exists:**
Notifications are a double-edged sword. Too few, and the user misses important events (overdue invoice, failed payment, security breach). Too many, and the user develops notification fatigue and ignores all of them — including the critical ones. This section gives the user fine-grained control: "I want to know instantly when a payment fails (SMS + Push + WhatsApp), but I don't need to know instantly when every payment comes in (just show me in the app and give me a daily email digest)." The quiet hours are essential for business owners' sanity — no one wants a 3 AM SMS because a customer paid their invoice early. The channel flexibility accommodates different working styles: some owners live in their email, some live on WhatsApp, some only check the app. The notification history is the "I know I got a notification about something yesterday but I can't remember what" safety net.

---


---

### page 9:  Account Management
## Section  — Data, Privacy & Account Management

**What it contains:**
The nuclear options — data export, data deletion, account closure, and privacy settings. This section is used rarely but must exist for compliance (Kenya Data Protection Act — KDPA) and user trust.

**Data Export (Full):**
- "Export All My Data" button: generates a complete archive of all business data
  - All transactions (CSV)
  - All invoices, receipts, credit notes (PDF)
  - All supplier and customer records (CSV)
  - All ledger entries (CSV)
  - All reports (PDF)
  - All uploaded documents (KYB, receipts, contracts — original files)
  - All settings and configurations (JSON)
- The archive is packaged as a ZIP file, encrypted with a password the user sets, and made available for download for 7 days
- "This export may take up to 24 hours to prepare. We'll email you when it's ready."

**Data Retention Settings:**
- "How long should PayMo retain your financial data?" 
  - Minimum: 7 years (KRA requirement — cannot be set lower)
  - Maximum: Indefinite
  - Default: 7 years
- "When the retention period expires, what should we do?"
  - Anonymize: replace names, PINs, phone numbers with random strings, but keep the financial data for aggregated analytics
  - Delete: permanently remove all data (not recommended — may be required for tax audits even after 7 years in some cases)
- "Apply retention to closed businesses" toggle: if a business in the portfolio is deactivated, start the retention countdown from deactivation date

**Privacy Settings:**
- "Allow PayMo to use my anonymized data for product improvement" — toggle on/off. If on, aggregated, non-identifiable data (e.g., "average transaction size for retail businesses in Nairobi") may be used for analytics and benchmarking
- "Allow PayMo to contact me about new features and promotions" — toggle on/off
- "Display my business in PayMo's customer directory/testimonials" — toggle on/off

**Account Closure:**
- **Close Business Account**: 
  - "I want to close [Business Name]'s PayMo account permanently"
  - Prerequisites checklist (all must be met before closure is allowed):
    - ☐ All transactions reconciled
    - ☐ All taxes filed and paid (no outstanding KRA liabilities)
    - ☐ All payments completed (no pending approvals or in-flight transactions)
    - ☐ All funds withdrawn (zero balance across all accounts and floats)
    - ☐ All integrations disconnected
    - ☐ All team members removed or transferred to another business
  - If prerequisites are not met: "You cannot close this account until the above items are resolved. Click an item to see what's needed."
  - If prerequisites are met: "Close Account" button (requires password + MFA confirmation)
  - **After closure**: the business data is retained for 7 years (per retention settings) but the account is inactive and no transactions can occur. After the retention period, the data is anonymized or deleted per the retention settings.

**Delete Entire PayMo Account (Personal):**
- "I want to delete my personal PayMo account and all my businesses"
- Only available if the user has closed all businesses in their portfolio
- Requires password + MFA + email confirmation
- After deletion: the user's login is permanently removed, all their businesses' data follows the retention policy

**Detailed information & data points:**
- The full data export complies with the Kenya Data Protection Act (KDPA) right of data access — the data subject (the business owner) has the right to receive a copy of all their personal and business data held by the data controller (PayMo)
- Data deletion/retention is a background job that runs monthly — it doesn't happen instantly on account closure. The account is closed (no access) immediately, but the data is purged according to the schedule
- KRA's 7-year retention requirement is a hard floor — even if the user selects "Delete after 7 years", the system retains a minimal tax-audit trail (amounts, dates, tax calculations) for 7 years, even if personally identifiable information is deleted
- For multi-business: closing one business in a portfolio does NOT close the others. Each business is closed independently
- The account closure prerequisites exist to protect both PayMo and the business: closing an account with outstanding taxes or pending payments would create legal and financial messes

**Reason this section exists:**
Trust requires an exit. If a business owner feels locked in — "I can't leave because I can't get my data out" — they trust the platform less, not more. The full data export is the ultimate trust signal: "Your data is yours. You can take it all, anytime, in standard formats." The KDPA compliance is non-negotiable for a platform operating in Kenya — the Data Commissioner can fine PayMo for failing to provide data access or deletion. The account closure flow with prerequisites ensures a clean exit: no dangling payments, no unpaid taxes, no orphaned integrations. The retention settings give the business owner control over how long their data lives, while enforcing the KRA 7-year minimum. This section is rarely visited, but its existence is felt every day as a subconscious trust builder: *"If I ever need to leave, I can."*

-------------------------
## page 10:
## Section — Security, MFA & Device Management

**What it contains:**
The technical security settings that protect the business's financial data and money from unauthorized access. This is where passwords, two-factor authentication, and device management live.

**Password Policy (for the business — applies to all team members):**
- Minimum length: 8 characters (configurable: 8, 10, 12)
- Complexity requirements: uppercase, lowercase, number, special character (each toggleable)
- Password expiry: "Never" (default for modern security — NIST recommends against forced expiry) or "Every X days"
- Password history: "Cannot reuse last 5 passwords"
- "Enforce password change on next login" — forces all users to set a new password (useful after a security incident)

**Multi-Factor Authentication (MFA):**
- **MFA Policy**: Off (not recommended), Optional (users can enable it themselves), Required (all users must set it up before they can access the platform), Required for sensitive actions only (MFA prompted only when approving payments, filing taxes, changing settings — not for everyday viewing)
- **MFA Methods**:
  - **Authenticator App** (recommended): TOTP via Google Authenticator, Authy, etc. User scans a QR code during setup. 6-digit code entered on login.
  - **SMS**: code sent to the user's registered phone number. Less secure than authenticator app (SIM swap risk) but more accessible.
  - **Email**: code sent to the user's registered email. Least secure but fallback option.
- **Setup flow**: "Enable MFA" → choose method → scan QR / verify phone / verify email → enter code to confirm → "MFA enabled. Backup codes generated."
- **Backup Codes**: 10 single-use backup codes generated when MFA is set up. User stores these safely. If they lose their phone, a backup code gets them in.
- **MFA Status per User** (visible to Admins): "John Mwangi: MFA enabled (Authenticator App). Last used: 2 hours ago." or "Jane Wanjiku: MFA not enabled. ⚠" — Admin can send a nudge: "Require Jane to set up MFA on next login."

**Device Management:**
- **Trusted Devices List**: shows all devices that have logged into this business account:
  - Device name (e.g., "John's MacBook Pro"), OS/Browser, IP Address (approximate location), First Login Date, Last Active Date, Status (Active, Expired, Revoked)
  - "Revoke Device" action: immediately logs out the device and prevents future logins from it without re-authentication
- **New Device Detection**: when a user logs in from a new device (not in the trusted list), the system:
  - Sends an alert notification to the user's other devices: "New login from Windows PC in Nairobi. Was this you? [Yes, it's me] [No, secure my account]"
  - If "No" is clicked: the new device is revoked, the user is logged out, and the account is temporarily locked pending owner verification
  - If "Yes" is clicked: the device is added to the trusted list and the alert is dismissed
- **Session Timeout**: "Log out after inactivity of: 15 minutes / 30 minutes / 1 hour / 4 hours / Never" — configurable per business. Shorter is more secure, longer is more convenient.

**Login Security:**
- **Account Lockout**: "Lock account after X failed login attempts" (default: 5). Locked account requires owner/admin intervention or waiting period (e.g., 30 minutes) to unlock
- **Login Notifications**: "Send me an email/SMS every time someone logs into my account" — toggleable per user
- **IP Whitelisting** (for Enterprise): "Only allow logins from these IP addresses/ranges" — prevents access from unknown networks

**Security Audit Log:**
- A filtered view of the audit trail (Section 4.9) showing only security events:
  - Logins (successful, failed), logouts
  - MFA events (enabled, disabled, code entered, backup code used)
  - Device events (trusted, revoked, new device detected)
  - Password events (changed, reset requested, policy enforced)
  - Lockout events (account locked, unlocked)
  - Setting changes (timeout changed, IP whitelist modified)

**Detailed information & data points:**
- MFA is enforced at the authentication middleware level — before the user sees any business data, MFA must be passed
- SMS MFA uses a rate limiter to prevent abuse: max 3 SMS codes per phone number per hour
- Backup codes are hashed in the database — even if the database is compromised, the codes cannot be read. They are checked by hashing the user's input and comparing
- Device trust is stored as a long-lived cookie (with secure and http-only flags) on the user's device, plus a server-side record. Revoking the server-side record invalidates the cookie
- For API access: MFA is handled differently. API keys are used instead of passwords, and sensitive API operations require a separate API-specific secret or a one-time token obtained via MFA
- The security audit log is retained indefinitely (not subject to the 7-year financial record retention — security logs are kept forever)

**Reason this section exists:**
A PayMo account controls the business's money. If it's compromised, the business can lose everything in minutes. MFA is the single most effective protection against account takeover — without it, a compromised password is all an attacker needs. Making MFA "Required for sensitive actions" is the pragmatic middle ground: users don't have to enter a code every time they open the app (which causes fatigue and pushback), but they do when they're about to approve a KES 500K payment or file a KRA return. The device management gives the owner visibility into who is accessing the account and from where: "Why is there an active login from a Windows PC in Mombasa when all my staff are in Nairobi?" The new device detection is the early warning system for unauthorized access. The security audit log is for post-incident investigation: "The breach happened at 2:14 AM from IP address X. The attacker used a valid password (obtained via phishing) but was blocked by MFA." This section is the difference between "we got hacked and lost KES 2M" and "they tried to hack us but MFA stopped them."

---








------------

---------------

## Section  — Quick Actions Bar (Persistent)

**What it contains:**
The final consistent sticky bar, tailored for the Settings & Security page — which is fundamentally about configuration and administration, not daily operations.

**Actions:**
1. **"Invite Team Member"** — opens the invite modal (Section 5.3) pre-populated with a "Viewer" role (safest default)
2. **"Edit Business Profile"** — jumps to the Business Identity section (Section 5.1) for quick edits (phone number, address)
3. **"Check Compliance"** — jumps to the KYB Compliance Status checklist (Section 5.1) showing current level and any missing documents
4. **"Security Checkup"** — opens a modal showing the business's security posture: "MFA: Enabled ✓ | All sessions: Trusted ✓ | No failed logins in 30 days ✓ | Overall: Strong" — with links to fix any weaknesses
5. **"Manage Integrations"** — jumps to the Active Integrations list (Section 5.6) showing connection status of all integrations
6. **"Contact Support"** — opens the live chat widget or support form (Section 5.7)
7. **"View System Status"** — opens the System Status panel (Section 5.7) in a modal/tooltip for a quick health check

**Context-aware behavior:**
- If KYB compliance is below Level 2 (documents missing), the "Check Compliance" button pulses amber with "Action needed"
- If any integration has an "Error" status, the "Manage Integrations" button shows a red badge with the count of errored integrations
- If a team member has been "Invited" but hasn't accepted in 7+ days, "Invite Team Member" badge shows the pending invite count
- If the system status page shows any degraded/outage, "View System Status" turns amber/red

**Reason this section exists:**
Settings pages are notoriously hard to navigate because they're flat lists of options with no clear hierarchy. The quick action bar provides a "top tasks" shortcut layer for the admin tasks that are most frequently needed: invite someone, check compliance, verify security, check integrations. The "Security Checkup" action is particularly valuable — instead of navigating through MFA settings, device management, and password policies to assess security, the admin gets a one-click summary: "You're good" or "You have 2 issues to fix." The context-aware badges ensure that problems (missing KYB documents, failed integrations, system outages) are surfaced proactively, even when the user isn't actively looking for them. This maintains the pattern established across all 5 pages: the quick action bar is the consistent, predictable, context-aware shortcut layer that makes the platform feel intelligent and responsive.

---









# END OF COMPREHENSIVE OUTLINE

**Summary of the 5 consolidated pages and their section counts:**

| Page | Sections | Core Promise |
|---|---|---|
| **1. Get Paid** | 10 | Every shilling coming in, from every channel, tracked and collected |
| **2. Pay Suppliers** | 10 | Every shilling going out, approved, executed, and recorded |
| **3. Cash & Accounts** | 10 | All your money, everywhere, growing and forecasted |
| **4. Bookkeeping & Taxes** | 10 | Books write themselves, taxes file themselves |
| **5. Settings & Security** | 10 | Your business is set up, secure, compliant, and supported |

**Total: 50 sections across 5 pages**, forming a complete, interconnected superapp where every section reads from and writes to the central General Ledger, every page respects the multi-business portfolio context, and every user journey flows naturally from money-in → money-out → cash management → reporting → compliance → administration.




