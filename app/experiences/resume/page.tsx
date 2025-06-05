'use client'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`

export default function ResumeViewer() {
  return (
    <div className="flex flex-col items-center p-4">
      <Document
        file="/Resume.pdf"
      >
        <Page pageNumber={1} />
      </Document>
      <a
        href="/resume.pdf"
        download
        className="mt-4 text-blue-500 underline"
      >
        Download / Print PDF
      </a>
    </div>
  );
}