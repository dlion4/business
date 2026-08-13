
---

# ✅ PAGE 0: DASHBOARD OVERVIEW (`dashboard.html`)

**Zone:** 🏠 Home / Command Center
**Mental model for the user:** *"When I open the app, I want to know: Am I making money? Do I have cash? What needs my attention right now? And what should I do next?"*
**Core thesis:** The dashboard is not a report — it's a decision engine. A business owner opens the app with 3 minutes between customers. In those 3 minutes, they need to know if everything is fine (green), something needs attention (amber), or something is on fire (red) — and then take action immediately without navigating away. Every element on this page either informs a decision or triggers an action. Nothing is decorative.

---

## Section 0.1 — Financial Pulse (Hero KPI Strip)

**What it contains:**
A horizontal row of 4–6 primary metric cards that serve as the business's financial heartbeat. These are the numbers a business owner would check first thing every morning. On mobile, these stack into a 2×2 or 2×3 grid. Each card is tappable/clickable and navigates to the relevant detailed page.

**Cards (left to right, priority order):**

1. **Cash Balance**
   - Label: "Cash on Hand"
   - Value: KES 1,245,000 (large, bold)
   - Subtext: "Across 3 accounts" or "M-Pesa: KES 800K · Bank: KES 445K"
   - Trend: ▲ +12% vs. last month (green) or ▼ -8% (red)
   - Sparkline: last 30 days mini chart
   - Tap target: → Cash & Accounts page
   - **Alert state:** If balance is below a configured minimum threshold (e.g., KES 100K), the card turns amber with a pulsing border and subtext changes to "⚠ Below your KES 100K minimum"

2. **Money In (This Month)**
   - Label: "Collected"
   - Value: KES 3,450,000
   - Subtext: "From 287 transactions · 12% above target"
   - Trend: ▲ +18% vs. same month last year
   - Sparkline: daily collection bars for this month (days that have passed)
   - Tap target: → Get Paid → Collection Analytics
   - **Alert state:** If collections are tracking below 70% of the monthly target at mid-month, card turns amber: "⚠ Behind target pace"

3. **Money Out (This Month)**
   - Label: "Paid Out"
   - Value: KES 2,180,000
   - Subtext: "Suppliers: KES 1.5M · Payroll: KES 450K · Other: KES 230K"
   - Trend: ▼ -5% vs. last month (green — spending less) or ▲ +22% (amber — spending spike)
   - Tap target: → Pay Suppliers → Analytics
   - **Alert state:** If spending exceeds 90% of budget, card turns red: "🔴 92% of monthly budget used"

4. **Outstanding (Owed to You)**
   - Label: "Receivables"
   - Value: KES 890,000
   - Subtext: "12 overdue invoices · KES 320K is 30+ days late"
   - Trend: ▲ +KES 120K vs. last month (red — growing problem) or ▼ -KES 50K (green — improving)
   - Tap target: → Get Paid → Receivables & Aging
   - **Alert state:** If any single invoice is 60+ days overdue and above KES 50K, card pulses red: "🔴 KES 150K overdue 60+ days"

5. **Payables (You Owe)**
   - Label: "Bills Due"
   - Value: KES 560,000
   - Subtext: "3 due this week · KES 180K due tomorrow"
   - Trend indicator
   - Tap target: → Pay Suppliers → Invoice/PO Management
   - **Alert state:** If anything is due within 48 hours, card turns amber. If overdue, red: "🔴 KES 45K overdue"

6. **Net Position (Optional — shown if business has both receivables and payables data)**
   - Label: "Net Cash Position"
   - Value: KES 685,000 (Cash + Receivables - Payables)
   - Subtext: "If you collected everything and paid everything today"
   - Tap target: → Bookkeeping → Balance Sheet

**Detailed information & data points:**
- All values are scoped to `currentBusinessKey` — switching business in the shell switches all six cards
- Currency formatting follows Kenya conventions: "KES 1,245,000" (no decimals for whole shillings, ".00" only if cents exist)
- Date context: "This Month" means calendar month (1st to last day), not rolling 30 days — matches how businesses think and report to KRA
- The sparklines use the last 30 data points regardless of period — on the "Collected" card, each bar is one day of the current month
- Thresholds for alert states are configurable per business in Settings (default sensible values provided out-of-box)
- If the business is brand new (no data), cards show "No data yet" with a friendly CTA: "Start by creating your first invoice →"

**Reason this section exists:**
These six numbers answer the six questions every business owner asks subconsciously: "Do I have cash? Am I making money? Am I spending too much? Who owes me? Who do I owe? And what's my real position?" By putting them in a single horizontal strip, the owner gets a complete financial snapshot in under 5 seconds. The alert states are critical — they turn a passive information display into an active alarm system. The tap targets mean the dashboard isn't a dead end — it's a launchpad. The trend arrows prevent the "is this good or bad?" confusion — green up on income, red up on expenses, the system tells the user what the direction means in context.

---

## Section 0.2 — Attention Hub (Things That Need You)

**What it contains:**
A prioritized, actionable list of items that require the user's attention — sorted by urgency. This is the "what do I need to deal with RIGHT NOW" section. It replaces the need to check 5 different pages for pending items.

**Layout:**
A stacked card list (not a table — this needs to feel urgent and human, not spreadsheet-like) with each item showing: an urgency indicator (color bar on the left edge), an icon, a title, a brief description, a timestamp/deadline, and a primary action button. Items are grouped into three tiers:

**🔴 Urgent (Red left bar — must act today):**
- "Overdue: KES 150,000 from XYZ Ltd — 45 days late" → Action: "Send Reminder" or "Call"
- "Insufficient balance: KES 45,000 payroll scheduled tomorrow" → Action: "Top Up Account"
- "Payment approval expired: KES 200,000 to Supplier A" → Action: "Resubmit"
- "Tax deadline: VAT return due in 2 days" → Action: "File Now"
- "Dispute deadline: Card chargeback response due in 18 hours" → Action: "Respond Now"

**🟡 Important (Amber left bar — should act this week):**
- "5 invoices overdue 15–30 days" → Action: "View & Remind"
- "3 supplier invoices due within 7 days" → Action: "Review & Schedule"
- "Payroll preview ready: KES 450,000 for 12 employees" → Action: "Review & Approve"
- "M-Pesa Paybill callback failure detected" → Action: "Troubleshoot"
- "New KRA PIN verification required for supplier" → Action: "Update"

**🟢 Informational (Green left bar — good to know):**
- "Monthly collection target 78% achieved — 12 days remaining"
- "Recurring invoice for Tenant B generated and sent successfully"
- "New feature: You can now accept card payments — activate →"
- "Your M-Pesa Paybill collected 15% more this week vs. last week"

**Interaction details:**
- Each item is dismissible (✕ button) — dismissed items go to a "Dismissed" state and don't reappear unless the condition worsens (e.g., an invoice goes from 15 days to 30 days overdue, it re-surfaces as Urgent)
- Tapping the action button opens a modal or slide-over that resolves the item without leaving the dashboard (e.g., "Send Reminder" opens the reminder modal with the customer pre-selected)
- Items have a "Snooze" option: "Remind me in 2 hours / Tomorrow / Next week"
- Maximum items shown: 8 (2 urgent + 3 important + 3 informational). If more exist, a "View all X items" link goes to a full notifications/activity page
- Empty state: If nothing needs attention, show a celebratory message: "✅ All clear! Nothing needs your attention right now." with a subtle confetti animation (first time only)

**Detailed information & data points:**
- Items are generated by a rules engine that runs on page load (and via push/websocket for real-time updates):
  - Overdue invoices: query invoices where `dueDate < today AND status != 'Paid' AND status != 'Cancelled'`, sorted by days overdue descending
  - Low balance: compare cash balance to configured minimum threshold
  - Approval queue: count pending approvals assigned to this user
  - Tax deadlines: compare KRA calendar to today's date
  - Dispute deadlines: count card disputes with response deadline within 48 hours
  - Callback failures: check payment channel health logs
- Each item type has a priority score (0–100) that determines its position: overdue invoices score higher the more days late, low balance scores higher the lower the balance relative to threshold
- Items are deduplicated: if 5 invoices are overdue for the same customer, they collapse into one item: "5 overdue invoices from Customer X — KES 320K total"
- The attention hub respects user permissions: a junior clerk only sees items relevant to their role (no "approve payroll" if they don't have permission)

**Reason this section exists:**
This is the section that makes the dashboard a daily habit rather than a page you visit once and forget. A business owner's biggest fear is that something is falling through the cracks — an unpaid bill incurring penalties, a customer who's about to churn because no one followed up, a tax deadline missed. The Attention Hub eliminates that fear by putting every "something needs you" item in one place, sorted by what hurts most if ignored. The three-tier system (Urgent/Important/Informational) prevents alert fatigue — if everything is red, nothing is red. The dismiss and snooze options give the user control: they're not locked into a nagging interface. The inline action buttons are the key differentiator — the user can send a reminder, approve a payment, or file a tax return without ever leaving the dashboard. This turns 5 minutes of "checking up on things" into 30 seconds of "handled."

---

## Section 0.3 — Cash Flow Snapshot (Today / This Week / This Month)

**What it contains:**
A visual, intuitive cash flow summary that answers: *"Is more money coming in than going out, and is that trend healthy?"* This is not a full cash flow statement (that lives in Bookkeeping) — it's a simplified, directional view.

**Primary View — Cash Flow Bar Chart:**
- A horizontal or vertical bar chart showing Money In (green bars) vs. Money Out (red bars) side by side for each of the last 7 days (default: "This Week" view)
- Each bar pair is labeled with the day name (Mon, Tue, Wed...) and the net amount below (e.g., "+KES 45,000" in green or "-KES 12,000" in red)
- A cumulative net line overlaid on the chart showing the running total for the period
- Toggle between: Today | This Week | This Month | Last 3 Months
- Target line (if monthly target is set): a dashed horizontal line showing the target daily/weekly/monthly net cash flow needed to hit the goal

**Summary Cards Below Chart:**
- "Net this week: +KES 230,000" (green) or "-KES 45,000" (red)
- "Average daily net: +KES 32,800"
- "Best day: Friday +KES 85,000" / "Worst day: Monday -KES 15,000"
- "Projected month-end net: +KES 680,000" (based on current run rate × remaining days)

**Cash Flow Forecast (Simple):**
- A simple forward-looking indicator: "Based on your patterns, you'll collect ~KES X and spend ~KES Y in the next 7 days, leaving a projected net of KES Z"
- If the projected net is negative: "⚠ You may need to top up by KES X to cover expected outflows"
- This uses a basic moving average of the last 30 days — no complex ML, just "you usually collect KES 50K/day and spend KES 30K/day"

**Detailed information & data points:**
- Money In includes: all settled collections (M-Pesa, card, bank, QR, links, cash recorded), minus fees, minus refunds
- Money Out includes: all executed payments (supplier, payroll, expense, tax), plus fees paid
- Pending items (unpaid invoices, unapproved payments) are NOT included — this shows actual cash movement only, to avoid misleading the user
- The forecast explicitly labels itself as an estimate: "Based on your recent patterns (not a guarantee)"
- Date ranges align with the financial pulse cards: "This Month" = calendar month
- On mobile: the bar chart simplifies to a single "Net Cash Flow" number with a sparkline and expand-to-detail tap

**Reason this section exists:**
Cash flow is the #1 reason businesses fail — not profitability, not revenue, but literally running out of cash to pay today's bills. A P&L tells you if you're profitable over a year. A cash flow chart tells you if you can make payroll on Friday. This section gives the owner an immediate sense of direction: are the green bars consistently taller than the red bars? Is Monday always a negative day (payday for many Kenyan businesses)? The forecast, even if simple, surfaces a critical question: "Will I have enough cash next week?" If the answer is "maybe not," the owner can act NOW — delay a non-urgent payment, chase an overdue invoice, or top up their account — rather than discovering the problem on the day payroll fails.

---

## Section 0.4 — Recent Activity Feed (Live Transaction Stream)

**What it contains:**
A chronological, live-updating feed of the most recent financial events across the entire business. This is the "what just happened" section — the digital equivalent of the shopkeeper hearing the M-Pesa confirmation beep.

**Feed Items (newest first, max 15 visible):**
Each item shows: timestamp (relative — "2 min ago"), icon/color by type, description, amount, and status.

**Types displayed:**
- **Payment received:** "💳 M-Pesa payment from John Mwangi — KES 15,000" (green, checkmark)
- **Payment received (linked to invoice):** "📄 Invoice #INV-0045 paid by ABC Ltd — KES 85,000" (green, with invoice link)
- **Payment sent:** "📤 Bank transfer to Supplier X — KES 200,000" (red/orange, with status: Processing/Sent/Failed)
- **Invoice sent:** "📨 Invoice #INV-0048 sent to Jane Wanjiku via WhatsApp" (blue)
- **Invoice created:** "📝 Draft invoice #INV-0049 created — KES 32,000" (grey)
- **Refund processed:** "↩️ Refund of KES 5,000 to Peter Ochieng — completed" (amber)
- **Payment failed:** "❌ M-Pesa STK push failed for KES 8,000 — insufficient funds" (red)
- **Approval action:** "✅ You approved payment KES 500,000 to Landlord" (purple)
- **Payroll:** "💰 Payroll of KES 450,000 executed for 12 employees" (blue)
- **Tax:** "🏛️ VAT return filed — KES 67,200 payable" (dark blue)
- **Channel event:** "⚙️ M-Pesa Paybill callback URL restored" (grey)
- **Recurring:** "🔄 Monthly invoice generated for Tenant A — KES 35,000" (teal)

**Interaction details:**
- Each item is tappable: opens a detail slide-over showing the full transaction/invoice/payment record
- "View all activity" link at the bottom → navigates to a full Activity Log page (or filters the current view)
- Real-time updates: if the user is on the dashboard and a payment comes in, the feed item slides in from the top with a subtle animation and a brief highlight glow
- Filter pills above the feed: All | Money In | Money Out | Invoices | Approvals | System — default: All
- Unread indicator: if the user hasn't visited the dashboard since their last session, new items since last visit have a subtle blue dot

**Detailed information & data points:**
- Feed data comes from the central ledger's audit trail / event log — the same source that powers the Bookkeeping page's transaction journal
- Items are deduplicated and prioritized: a payment that also closes an invoice shows as one combined item ("Invoice #INV-0045 paid — KES 85,000 via M-Pesa") rather than two separate events
- The feed is paginated on scroll (infinite scroll) but the initial load is capped at 15 items for performance
- For multi-business: the feed shows activity for the currently selected business only (unless portfolio view is active)
- Timestamps are relative for items < 24 hours old ("5 min ago", "2 hours ago") and absolute for older items ("Yesterday 3:45 PM", "Mon 15 Jan")
- Failed transactions are always shown (not filtered) because they're actionable — the user needs to know a payment failed

**Reason this section exists:**
The activity feed provides psychological reassurance. When a business owner opens the app and sees "M-Pesa payment from John Mwangi — KES 15,000 — 3 min ago," they know the system is working, money is flowing, and they're connected to their business in real-time. It's the same reassurance a shopkeeper gets from the M-Pesa SMS tone. Without it, the dashboard feels like a static report — "this is what happened last week" — rather than a living command center. The combined invoice+payment items reduce noise: instead of seeing "invoice sent" and then later "payment received" as two separate events, the user sees the completion. The filter pills let the user narrow to what they care about right now ("just show me money in") without leaving the page. The real-time slide-in animation is a small detail with outsized impact — it makes the platform feel alive.

---

## Section 0.5 — Receivables & Payables at a Glance (Mini Aging)

**What it contains:**
A compact, visual summary of the business's receivables and payables aging — designed to fit in half the dashboard width (paired with another section) without requiring the user to navigate to the full aging dashboard.

**Receivables Mini-View:**
- **Horizontal stacked bar**: total receivables broken into color segments — Green (0–30 days), Amber (31–60), Orange (61–90), Red (90+)
- **Total number** centered or above: "KES 890,000 owed to you"
- **Below the bar**: "12 invoices · 5 customers · 3 overdue"
- **Top 3 overdue customers** listed as compact rows: Customer name, amount, days overdue
- Tap: → Full Receivables & Aging Dashboard (Section 1.5)

**Payables Mini-View:**
- **Horizontal stacked bar**: total payables broken into color segments — Green (not yet due), Amber (due within 7 days), Red (overdue)
- **Total number**: "KES 560,000 you owe"
- **Below the bar**: "8 bills · 3 due this week · 1 overdue"
- **Top 3 upcoming payments** listed as compact rows: Supplier name, amount, due date
- Tap: → Full Payables view (Page 2)

**Layout:**
- On desktop: Receivables mini-view on the left, Payables mini-view on the right, side by side
- On mobile: stacked vertically, Receivables on top (money in first — optimism bias)

**Detailed information & data points:**
- Aging buckets match the full Receivables & Aging Dashboard exactly — same calculation, same data source, just summarized
- The stacked bars use the same color scheme as the full page for visual consistency
- "Overdue" in payables means past the due date AND not yet paid/partially paid
- Amounts are real-time: if a payment comes in that clears an invoice, the receivables bar shrinks immediately
- The "Top 3" lists are sorted by urgency: receivables by days overdue (most overdue first), payables by due date (soonest first)

**Reason this section exists:**
The full aging dashboard (Section 1.5) is powerful but requires navigation. This mini-view puts the two most important balance-sheet-adjacent numbers on the home screen: what's owed to you and what you owe. The stacked bar is immediately readable: if the red segment is large, the owner knows they have a collection problem. If the payables bar is mostly green, they know their bills are under control. The "Top 3" lists provide specificity without clutter — the owner sees the three most urgent items in each direction and can decide whether to act now or dive deeper. This section exists because a business owner should never have to click three times to know "who owes me the most."

---

## Section 0.6 — Upcoming Calendar (Next 7 Days)

**What it contains:**
A timeline/calendar view of financially significant events in the next 7 days. This answers: *"What's coming that I need to prepare for?"*

**Event Types Shown:**
- **Due invoices (receivables):** "Invoice #INV-0042 due — KES 120,000 from ABC Ltd"
- **Due bills (payables):** "Supplier X invoice due — KES 85,000"
- **Scheduled payments:** "Bulk payment to farm suppliers — KES 350,000 (pending approval)"
- **Payroll:** "Payday — KES 450,000 for 12 employees"
- **Tax deadlines:** "VAT return due (20th)"
- **Recurring invoices:** "Monthly rent invoice auto-generates for Tenant A — KES 35,000"
- **Subscription renewals** (business's own costs): "Software subscription renewal — KES 5,000"
- **Invoice due dates you've promised customers** (if you offered early-payment discounts): "2% early-payment discount expires for Invoice #INV-0038"

**Layout:**
- **Desktop:** A 7-column horizontal layout (Mon–Sun), each column showing that day's events as compact cards stacked vertically. Today's column is highlighted with a left border or background tint. Empty days show "Nothing scheduled" in muted text.
- **Mobile:** A vertical list grouped by day: "TODAY" (highlighted), "TOMORROW", "WEDNESDAY 15 JAN", etc. Each group lists its events.
- Events are color-coded by type: green (money in), red/orange (money out), blue (administrative), purple (tax/government)

**Interaction:**
- Each event is tappable → opens the relevant detail (invoice, payment, tax filing page)
- "Add to phone calendar" button on each event (generates an .ics file or deep link to Google Calendar)
- "View full calendar" link → navigates to a full Calendar page (if one exists) or opens a month-view modal

**Detailed information & data points:**
- Calendar data is generated from multiple sources: invoice due dates, bill due dates, scheduled payment dates, payroll schedules, KRA tax calendar, recurring invoice schedules
- The KRA tax calendar is pre-loaded with all Kenya tax deadlines for the current and next year (VAT 20th, PAYE 9th, Withholding Tax per schedule, etc.) — the user doesn't need to enter these
- Events are only shown if they have a financial amount attached — pure reminders without money impact are excluded to keep the view focused
- If a day has more than 3 events, the 3 highest-value ones are shown with a "+X more" link
- The calendar respects business days: if a tax deadline falls on a weekend, it shows on the preceding Friday with a note "(KRA deadline — Monday is a holiday)"

**Reason this section exists:**
Surprise payments kill cash flow plans. A business owner who forgets that payroll is on Friday and a supplier payment is due on Thursday can find themselves short. The 7-day calendar makes the near future visible and tangible. By mixing receivables and payables on the same timeline, the owner can see: "Wednesday I'm paying out KES 85K, but Thursday I'm expecting KES 120K from ABC — I'll be fine." The KRA deadline integration is specifically valuable because tax penalties in Kenya are real and painful — a missed VAT deadline means a 5% penalty plus daily interest. Seeing "VAT return due in 3 days" on the home screen prevents that. The 7-day window is deliberately short — beyond a week, the events are less actionable and the view becomes cluttered.

---

## Section 0.7 — Channel Health & Collection Mix

**What it contains:**
A compact view of which payment channels are active, healthy, and driving the most volume. This is the "are my payment rails working?" section.

**Channel Status Cards (horizontal scroll on mobile, grid on desktop):**
Each card represents a payment channel:
- **M-Pesa Paybill:** Status dot (green/amber/red), volume this month (KES), transaction count, success rate %, mini sparkline
- **M-Pesa Till:** Same format
- **Bank/PesaLink:** Same format
- **Card Payments:** Same format
- **QR Payments:** Same format
- **Payment Links:** Same format

**Status Logic:**
- 🟢 Green: Channel is active, success rate > 95%, no recent outages
- 🟡 Amber: Channel is active but success rate dropped below 95% in the last 24 hours, OR callback URL issue detected, OR last transaction > 48 hours ago (unusual)
- 🔴 Red: Channel is down, disabled, or has a critical configuration error (e.g., callback URL returning 500)

**Collection Mix Donut Chart:**
- A small donut chart showing the percentage breakdown of collections by channel this month
- Center text: total collections amount
- Legend below with: Channel name, percentage, KES amount
- Tap a segment → filters the Recent Activity Feed (Section 0.4) to that channel

**Detailed information & data points:**
- Channel health checks run on page load: ping callback URLs, check last successful transaction timestamp, compare today's volume to 7-day average
- Success rate is calculated as: `successful transactions / (successful + failed transactions)` for the last 24 hours
- If a channel has zero transactions today and it usually has 20+ by this time, it's flagged amber: "Lower than usual activity"
- The collection mix donut updates in real-time as new transactions come in
- Channels that are "Available but not activated" are NOT shown here (they live in the Payment Methods Hub on the Get Paid page) — this section only shows active channels

**Reason this section exists:**
If M-Pesa goes down (it happens — Safaricom has outages), a business owner needs to know immediately because it directly impacts their revenue. If their Paybill callback is broken, payments are happening but not being recorded — the owner is losing visibility without knowing it. This section provides operational health monitoring without requiring the owner to navigate to the Payment Methods Hub and check each channel individually. The collection mix donut answers a strategic question: "Am I too dependent on one channel?" If M-Pesa is 95% of collections, the owner knows they have a concentration risk. The tap-to-filter interaction connects this section to the activity feed — seeing "Card is 2% of collections" and tapping it shows the actual card transactions, making the data tangible.

---

## Section 0.8 — Quick Actions Grid (Primary CTAs)

**What it contains:**
A grid of 6–8 action buttons that represent the most common tasks a user performs from the dashboard. This is the "I know what I want to do" shortcut — different from the Attention Hub (which is system-driven) because these are user-initiated.

**Grid Items (configurable order, default by frequency):**

| Icon | Label | Action |
|------|-------|--------|
| ➕ | New Invoice | Opens Invoice Wizard |
| 💰 | Create Payment Link | Opens Link creation modal |
| 📱 | Generate QR Code | Opens QR creation modal |
| 📤 | Send Money | Opens Pay Supplier flow (single payment) |
| 📋 | Record Payment | Opens manual payment recording modal |
| 👥 | Run Payroll | Opens Payroll wizard |
| 🏛️ | File Tax Return | Navigates to Tax filing page |
| 📊 | View Full Report | Opens analytics/report page |

**Layout:**
- Desktop: 4×2 grid of icon + label cards
- Mobile: 2×4 grid or horizontal scrollable row of circular icon buttons with labels below
- Each button opens a modal or navigates — never opens a new tab
- The grid is persistent (always visible, not behind a toggle)

**Personalization (future enhancement, noted in architecture):**
- The system tracks which actions the user clicks most and automatically reorders the grid to put frequent actions first
- A "Customize" button (gear icon) lets the user pin/unpin and reorder actions manually

**Detailed information & data points:**
- "New Invoice" is always first because it's the #1 action across all user segments
- "Run Payroll" only shows if the business has employees configured
- "File Tax Return" only shows if there's an upcoming KRA deadline within 14 days
- Each action button has a `data-action` attribute for analytics tracking — the product team knows which dashboard actions are most used
- On first login (no data), the grid expands to 6 items with larger cards and onboarding tooltips: "Start here — create your first invoice"

**Reason this section exists:**
The Attention Hub (Section 0.2) is reactive — the system tells you what to do. The Quick Actions Grid is proactive — you tell the system what you want to do. Both are needed because users have two modes: "what's broken?" and "I need to do X." Without the Quick Actions Grid, the user has to navigate to the correct page first and then find the button — adding 2–3 clicks to every common action. With it, "create invoice" is one tap from the home screen. The personalization (frequency-based reordering) is a subtle but powerful retention feature: over time, the dashboard literally reshapes itself to match how the user works, making it faster every time they open it.

---

## Section 0.9 — Business Context Switcher (Multi-Business Summary)

**What it contains:**
A compact section that ONLY appears when the user has access to multiple businesses (via the portfolio/multi-business feature). It provides a mini-dashboard for each business so the user can quickly assess all their entities without switching.

**Layout:**
- A horizontal scrollable card strip, each card representing one business
- The currently active business card has a highlighted border
- Each card shows: Business name, Business type icon (retail, services, property, etc.), Cash Balance, Money In (this month), Money Out (this month), 1–2 top attention items (e.g., "3 overdue invoices" or "Payroll tomorrow")
- Tapping a different business card switches `currentBusinessKey` and refreshes the entire dashboard

**Consolidated View Toggle:**
- A toggle above the strip: "Individual" | "Consolidated"
- In "Consolidated" mode, the Financial Pulse cards (Section 0.1) show summed totals across all businesses, and a small "by business" breakdown appears below each card
- The Attention Hub merges items from all businesses, tagged with the business name

**Detailed information & data points:**
- The multi-business summary only renders if the user's profile has `businesses.length > 1`
- Switching businesses triggers a full re-fetch of all dashboard data via TanStack Query (queries are keyed by `currentBusinessKey`)
- In consolidated mode, currency conversion is needed if businesses operate in different currencies — shown with a "Note: FX rates as of [date]" disclaimer
- The card strip is lazy-loaded: only the first 3 business cards render immediately, others load on scroll

**Reason this section exists:**
A user with a retail shop, a rental property, and a consulting side-business needs to see all three at a glance. Without this section, they'd have to switch businesses three times and mentally compare the numbers. The card strip makes it instant: "Shop is green, property is amber (rent overdue), consulting is fine." The consolidated toggle is for the "big picture" moment: "How much cash do I have across everything?" This section transforms the dashboard from a single-business tool into a portfolio management tool — critical for the superapp's "one app for all your businesses" promise.

---

## Section 0.10 — Dashboard Preferences & Layout Controls

**What it contains:**
A small control panel (accessible via a gear/icon button in the dashboard header) that lets the user customize what they see on their dashboard.

**Options:**
- **Date range:** This Month | This Week | Today | Custom (affects Financial Pulse and Cash Flow sections)
- **Business selector:** dropdown to switch `currentBusinessKey` (redundant with Section 0.9 but always visible for single-business users too)
- **Section toggles:** show/hide individual sections — each section has an on/off toggle. Default: all on
- **Section order:** drag-and-drop to reorder sections (desktop only; mobile follows desktop order)
- **Density:** Comfortable (default) | Compact (more data, smaller fonts) — for power users who want more on one screen
- **Refresh rate:** Real-time (default, uses websockets) | Manual (refresh button) | Every 5 minutes — for users on expensive data plans
- **Reset to default:** one-click to restore factory layout

**Persistence:**
- All preferences are saved per-user in localStorage (or user preferences in the database if logged in)
- Preferences survive page reload and browser restart
- On a new device, defaults are used until the user customizes again

**Detailed information & data points:**
- Section toggles don't disable data fetching — hidden sections still update in the background so that when re-enabled, they show current data immediately
- The "Compact" density mode reduces padding by 40% and font sizes by 1 step — designed for users on 13" laptops who want more vertical space
- The refresh rate setting is specifically for the Kenyan context where mobile data can be expensive — a user on a limited data plan might prefer "Manual" to avoid websocket traffic
- Preferences are namespaced by `currentBusinessKey` so the user can have different layouts per business (e.g., show the Payroll section for the business with employees, hide it for the sole proprietorship)

**Reason this section exists:**
No two business owners are the same. A property manager cares deeply about the receivables aging and doesn't need the channel health. A retailer cares about channel health and doesn't need the payables mini-view. Rather than building 15 variants of the dashboard, the preference system lets each user create their own. The section toggle is the minimum viable personalization — it's simple to understand ("I don't need this, turn it off") and immediately impactful. The density and refresh rate options address real constraints (screen size, data cost) rather than being feature creep. The persistence ensures the user's customization is respected — nothing is more annoying than customizing a dashboard and having it reset on the next visit.

---

## Page Layout Summary (Desktop Wireframe Order)

```
┌─────────────────────────────────────────────────────────┐
│  Business Shell Header (shared)                         │
│  [Logo] [Business Name ▼] [Search] [🔔 3] [👤]       │
├─────────────────────────────────────────────────────────┤
│  Dashboard Header: "Good morning, Jane"  ⚙️ Preferences │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.1 — Financial Pulse (6 KPI cards, row)      │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.2 — Attention Hub (stacked cards, left 60%)  │
│  SECTION 0.8 — Quick Actions Grid (right 40%)           │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.3 — Cash Flow Snapshot (full width chart)    │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.5 — Receivables Mini (left 50%)             │
│  SECTION 0.5 — Payables Mini (right 50%)                │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.6 — Upcoming Calendar (full width, 7 cols)   │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.7 — Channel Health (left 60%)                │
│  SECTION 0.4 — Recent Activity Feed (right 40%)         │
├─────────────────────────────────────────────────────────┤
│  SECTION 0.9 — Multi-Business Strip (if applicable)     │
└─────────────────────────────────────────────────────────┘
```

## Page Layout Summary (Mobile Wireframe Order)

```
┌──────────────────────┐
│  Shell Header        │
├──────────────────────┤
│  "Good morning"  ⚙️  │
├──────────────────────┤
│  Financial Pulse     │
│  (2×3 card grid)     │
├──────────────────────┤
│  Attention Hub       │
│  (stacked, max 4)    │
├──────────────────────┤
│  Quick Actions       │
│  (2×4 icon grid)     │
├──────────────────────┤
│  Cash Flow           │
│  (sparkline + net)   │
├──────────────────────┤
│  Receivables Mini    │
├──────────────────────┤
│  Payables Mini       │
├──────────────────────┤
│  Upcoming (list)     │
├──────────────────────┤
│  Channel Health      │
│  (horizontal scroll) │
├──────────────────────┤
│  Recent Activity     │
│  (feed, 8 items)     │
├──────────────────────┤
│  Biz Switcher Strip  │
└──────────────────────┘
```

---

## Data Flow & Integration Map

| Dashboard Section | Primary Data Source | Supporting Sources |
|---|---|---|
| 0.1 Financial Pulse | Cash & Accounts ledger | Get Paid collections, Pay Suppliers payments |
| 0.2 Attention Hub | Rules engine (multi-source) | Invoices, Approvals, Tax calendar, Channel health logs |
| 0.3 Cash Flow | Ledger (cash in/out entries) | Monthly target from Settings |
| 0.4 Activity Feed | Ledger audit trail / event log | Invoice status, Payment status, Approval status |
| 0.5 Mini Aging | Invoice + Payment matched data | Customer profiles |
| 0.6 Calendar | Invoice due dates, Bill due dates, Payroll schedule, KRA tax calendar, Recurring schedules | Settings (business payment terms) |
| 0.7 Channel Health | Payment channel config + transaction logs | Callback URL health checks |
| 0.8 Quick Actions | Navigation/routing only | — |
| 0.9 Biz Switcher | Multi-business context provider | All of the above, per business |
| 0.10 Preferences | localStorage / user prefs DB | — |

---

## Empty States & First-Run Experience

When a business has **no data yet** (brand new account), the dashboard transforms into an onboarding guide:

- **Financial Pulse cards** show "— KES" with a friendly message: "Let's get started! Your numbers will appear here once you create your first invoice or receive your first payment."
- **Attention Hub** shows a single green item: "✅ Welcome to PayMo! Complete these steps to set up your business:" with a checklist:
  - [ ] Add your business details
  - [ ] Activate M-Pesa Paybill
  - [ ] Create your first invoice
  - [ ] Add your first supplier
- **Cash Flow, Mini Aging, Calendar, Channel Health, Activity Feed** — all collapse into a single "Dashboard fills in as you use PayMo" message with icons showing what each section will display
- **Quick Actions Grid** remains fully functional — this IS how the user starts

The empty state is deliberately not barren — it's a guided onboarding experience that teaches the user what the dashboard will become while giving them clear first actions.

---

This outline ensures the Dashboard Overview page serves as a **living command center** — not a static report — where every section either surfaces a problem, confirms health, or enables an immediate action. The design respects the Kenya SME context: low attention span between customers, mobile-first usage, M-Pesa-centric payment channels, and KRA tax deadlines that have real financial consequences.