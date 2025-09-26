'use client'
import { FaFileDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <p className='text-4xl md:text-6xl font-bold p-4 md:p-8 mt-8 md:mt-12'>Resume</p>
      <Document file="/Tiffany Zhu - Resume.pdf" className='z-0'>
        <Page pageNumber={1} />
      </Document>
      <a
        href="/Tiffany Zhu - Resume.pdf"
        download
        className="flex items-center justify-center w-1/10 p-4 mt-8 bg-white/25 rounded-lg transition duration-700 transform hover: cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-shadow duration-300 font-bold"
      >
        Download Resume
      </a>
    </div>
  );
}