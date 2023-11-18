import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const TermsAndConditionsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Terms and Conditions"
    >
      <button onClick={onClose}>Close</button>
      <Document
        file="/habeas-data-unicentro.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Modal>
  );
};

export default TermsAndConditionsModal;
