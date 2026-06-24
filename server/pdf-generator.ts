import PDFDocument from 'pdfkit';
import fs from 'fs';

export function generatePDF(outputPath: string, content: string) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(outputPath));
  doc.fontSize(12).text(content, 100, 100);
  doc.end();
}