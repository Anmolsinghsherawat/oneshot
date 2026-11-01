import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function buildPDF() {
  const doc = new PDFDocument({
    margin: 40,
    size: 'A4',
    bufferPages: true,
  });

  const outputPath = path.join(process.cwd(), 'ONESHOT_ANIMATION_Documentation.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const PRIMARY_RED = '#ED1C24';
  const DARK_BG = '#0A0B10';
  const TEXT_DARK = '#1E293B';
  const TEXT_MUTED = '#64748B';
  const LIGHT_BORDER = '#E2E8F0';

  // --- COVER PAGE ---
  doc.rect(0, 0, 595.28, 841.89).fill(DARK_BG);

  // Red accent top banner
  doc.rect(0, 0, 595.28, 12).fill(PRIMARY_RED);

  // Title Box
  doc.fillColor('#FFFFFF').fontSize(28).font('Helvetica-Bold').text('ONE SHOT ANIMATION', 50, 180, { align: 'center' });
  doc.fillColor(PRIMARY_RED).fontSize(16).font('Helvetica-Bold').text('CLIENT & DEVELOPER HANDOVER SPECIFICATION', 50, 220, { align: 'center' });
  doc.fillColor('#94A3B8').fontSize(12).font('Helvetica').text('Comprehensive Technical Architecture, Design System & Operations Manual', 50, 245, { align: 'center' });

  // Divider line
  doc.moveTo(100, 280).lineTo(495, 280).strokeColor(PRIMARY_RED).lineWidth(2).stroke();

  // Metadata Table Box on Cover
  const metaY = 330;
  doc.rect(70, metaY, 455, 280).fill('#161922').strokeColor('#2D3748').lineWidth(1).stroke();

  const metadata = [
    ['Project Name', 'ONE SHOT ANIMATION Agency Platform'],
    ['Version', 'v1.0.0 (Production Ready)'],
    ['Document Date', 'July 27, 2026'],
    ['Client / Company', 'One Shot Animation Content & Ad Scaling Engine'],
    ['Target Audience', 'Client Executive Team & Software Engineers'],
    ['Licensing', 'Proprietary & Client-Owned (Full IP Transfer)'],
    ['Tech Support', 'anmolsingh30102006@gmail.com'],
    ['Demo Preview URL', 'https://ais-pre-5bfofmgvsaldtg6mpe4trz-712552403310.asia-southeast1.run.app'],
  ];

  let currentMetaY = metaY + 20;
  metadata.forEach(([label, value]) => {
    doc.fillColor('#94A3B8').fontSize(10).font('Helvetica-Bold').text(label + ':', 90, currentMetaY);
    doc.fillColor('#FFFFFF').fontSize(10).font('Helvetica').text(value, 220, currentMetaY, { width: 285 });
    currentMetaY += 30;
  });

  doc.fillColor('#64748B').fontSize(9).font('Helvetica-Oblique').text('© 2026 ONE SHOT ANIMATION. All Rights Reserved.', 50, 750, { align: 'center' });

  // --- PAGE 2: TABLE OF CONTENTS & EXECUTIVE SUMMARY ---
  doc.addPage();

  // Header Helper
  function renderHeader(sectionTitle) {
    doc.rect(40, 40, 515, 30).fill('#F8FAFC');
    doc.fillColor(PRIMARY_RED).fontSize(14).font('Helvetica-Bold').text(sectionTitle, 50, 48);
    doc.moveTo(40, 72).lineTo(555, 72).strokeColor(PRIMARY_RED).lineWidth(1.5).stroke();
  }

  renderHeader('1. Executive Summary & Project Overview');

  doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica').text(
    'ONE SHOT ANIMATION is a premier content creation agency and ad campaign scaling engine. This web platform serves as an immersive, high-converting digital portal that showcases high-craft 3D/CGI animation services, viral UGC video ad campaigns, case studies, interactive tools, and open career opportunities.\n\n' +
    'The application was engineered with a desktop-first, mobile-responsive layout built on React 18, Vite 6, and Tailwind CSS v4, utilizing motion animations and custom video lightboxes.',
    40, 90, { width: 515, lineGap: 4 }
  );

  doc.fontSize(11).font('Helvetica-Bold').fillColor(PRIMARY_RED).text('Core Business Objectives:', 40, 180);

  const objectives = [
    'Client Lead Generation: Drive high-intent prospective client consultation requests via interactive modals and direct scheduling triggers.',
    'Social Proof & ROI Projection: Demonstrate campaign ROI using an interactive ROAS & Revenue Projection Calculator.',
    'Viral Ad Hook Playground: Provide an interactive simulator for testing marketing hook concepts (Problem-Agitate, Curiosity, UGC Proof).',
    'Talent Acquisition: Showcase open 3D animation and creative roles with an integrated career application portal.'
  ];

  let objY = 200;
  objectives.forEach((obj, idx) => {
    doc.fillColor(PRIMARY_RED).fontSize(10).font('Helvetica-Bold').text(`${idx + 1}.`, 45, objY);
    doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica').text(obj, 60, objY, { width: 490, lineGap: 3 });
    objY += 28;
  });

  // Section 2: Technical Architecture
  doc.y = objY + 20;
  renderHeader('2. Complete Technical Stack');

  const stackData = [
    ['Core Framework', 'React 18.3+ with TypeScript 5.5'],
    ['Build Tool', 'Vite 6 with @vitejs/plugin-react'],
    ['Styling Engine', 'Tailwind CSS v4 with custom styling utilities'],
    ['Animation Engine', 'Motion (motion/react) for scroll physics & transitions'],
    ['Icon Library', 'Lucide React (lucide-react) lightweight SVG icons'],
    ['Interactive FX', 'canvas-confetti for celebration micro-interactions'],
    ['CDN & Assets', 'AWS CloudFront & Unsplash CDN for high-speed streaming']
  ];

  let tableY = doc.y + 25;
  doc.rect(40, tableY, 515, 20).fill('#1E293B');
  doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica-Bold').text('CATEGORY', 50, tableY + 5);
  doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica-Bold').text('TECHNOLOGY & SPECIFICATION', 200, tableY + 5);

  tableY += 20;
  stackData.forEach(([cat, tech], i) => {
    const bg = i % 2 === 0 ? '#F8FAFC' : '#FFFFFF';
    doc.rect(40, tableY, 515, 22).fill(bg).strokeColor(LIGHT_BORDER).lineWidth(0.5).stroke();
    doc.fillColor(TEXT_DARK).fontSize(9).font('Helvetica-Bold').text(cat, 50, tableY + 6);
    doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text(tech, 200, tableY + 6);
    tableY += 22;
  });

  // --- PAGE 3: FOLDER STRUCTURE & SECTIONS ---
  doc.addPage();
  renderHeader('3. Project Folder Architecture');

  const folderStructure = [
    'src/components/Navbar.tsx         - Floating header with adaptive background & nav links',
    'src/components/HeroSection.tsx     - HD video background loop, typography & CTA buttons',
    'src/components/OneShotSection.tsx  - Agency ethos & core vision showcase',
    'src/components/AboutSection.tsx    - Interactive statistics, company values & pillars',
    'src/components/ServicesSection.tsx - Detailed service breakdown & feature matrix',
    'src/components/PortfolioSection.tsx- Categorized video showcase with lightbox player',
    'src/components/ViralCampaignsSection.tsx - Vertical video reel marquee',
    'src/components/CampaignCalculator.tsx - Interactive ROAS & revenue calculator',
    'src/components/AdHookPlayground.tsx   - Interactive viral ad hook generator',
    'src/components/JobSection.tsx         - Open positions & application form modal',
    'src/components/ConsultationModal.tsx - Lead capture modal with confetti animation',
    'src/components/VideoPlayerModal.tsx   - HD video player modal with sound controls'
  ];

  let structY = 90;
  folderStructure.forEach((item) => {
    doc.rect(40, structY, 515, 20).fill('#F1F5F9').strokeColor(LIGHT_BORDER).lineWidth(0.5).stroke();
    doc.fillColor('#0F172A').fontSize(8.5).font('Courier').text(item, 48, structY + 5);
    structY += 22;
  });

  structY += 15;
  doc.y = structY;
  renderHeader('4. Design System & Branding Standards');

  doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica-Bold').text('Color Palette & HEX Tokens:', 40, doc.y + 25);

  const colors = [
    ['Primary Red Accent', '#ED1C24', 'Used for active states, CTA buttons, and glowing ambient flares'],
    ['Dark Canvas Charcoal', '#0A0B10', 'Deep background neutral for optimal video contrast'],
    ['Header Backdrop Glow', '#F0F2F5', 'Top header gradient reflection for maximum visibility'],
    ['Rating Star Gold', '#F59E0B', '5-Star rating badges and trust indicators'],
    ['Text Primary / Muted', '#FFFFFF / #94A3B8', 'High contrast body copy passing WCAG AA standards']
  ];

  let colorY = doc.y + 40;
  colors.forEach(([name, hex, desc]) => {
    doc.rect(40, colorY, 16, 16).fill(hex.split(' ')[0]).strokeColor('#000').lineWidth(0.5).stroke();
    doc.fillColor(TEXT_DARK).fontSize(9).font('Helvetica-Bold').text(name, 65, colorY + 3);
    doc.fillColor(PRIMARY_RED).fontSize(9).font('Helvetica-Bold').text(`(${hex})`, 200, colorY + 3);
    doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text(desc, 290, colorY + 3, { width: 260 });
    colorY += 24;
  });

  // --- PAGE 4: SECURITY, INSTALLATION & DEPLOYMENT ---
  doc.addPage();
  renderHeader('5. Security Audit & API Key Protection');

  doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica').text(
    'A comprehensive security audit was conducted on the codebase prior to handover:\n\n' +
    '• Zero Client Secret Exposure: No private API keys, backend tokens, database passwords, or server environment variables exist in the frontend source code.\n' +
    '• Secure Asset Streaming: All external video reels and images are streamed over HTTPS from trusted CloudFront and Unsplash CDNs.\n' +
    '• Safe Form Handling: Interactive lead forms operate purely in client memory with sanitized inputs, preventing injection vulnerabilities.',
    40, 90, { width: 515, lineGap: 5 }
  );

  doc.y = 210;
  renderHeader('6. Client Installation & Local Setup Guide');

  doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica').text(
    'To run this project locally on any developer or client machine:',
    40, 230
  );

  const steps = [
    '1. Extract the project ZIP archive or clone the GitHub repository.',
    '2. Open your terminal in the root directory.',
    '3. Run "npm install" to install all required npm dependencies.',
    '4. Run "npm run dev" to launch the Vite local development server.',
    '5. Open http://localhost:3000 in your web browser.'
  ];

  let stepY = 250;
  steps.forEach((step) => {
    doc.rect(40, stepY, 515, 22).fill('#1E293B');
    doc.fillColor('#38BDF8').fontSize(9).font('Courier-Bold').text(step, 50, stepY + 6);
    stepY += 26;
  });

  doc.y = stepY + 15;
  renderHeader('7. Production Build & Deployment');

  doc.fillColor(TEXT_DARK).fontSize(10).font('Helvetica').text(
    'To build the static production files for deployment:\n\n' +
    'Command:  npm run build\n\n' +
    'Output Directory: /dist\n' +
    'Deployment Targets: Vercel, Netlify, Cloudflare Pages, AWS S3 / CloudFront, or any standard web host.',
    40, doc.y + 25, { width: 515, lineGap: 4 }
  );

  // --- FOOTERS FOR ALL PAGES ---
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    if (i > 0) { // skip footer on cover
      doc.moveTo(40, 800).lineTo(555, 800).strokeColor('#E2E8F0').lineWidth(0.5).stroke();
      doc.fillColor('#94A3B8').fontSize(8).font('Helvetica')
        .text('ONE SHOT ANIMATION — Confidential Handover Spec', 40, 808);
      doc.text(`Page ${i + 1} of ${range.count}`, 40, 808, { align: 'right', width: 515 });
    }
  }

  doc.end();

  writeStream.on('finish', () => {
    console.log('PDF documentation successfully generated at:', outputPath);
  });
}

buildPDF();
