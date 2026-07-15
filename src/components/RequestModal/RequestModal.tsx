"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./RequestModal.module.css";

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Please fill in your phone number");
      return;
    }
    setError("");
    
    // Simulate API request
    console.log("Submit request:", {
      type: "Callback Request",
      name,
      phone,
    });
    
    setIsSubmitted(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h3 className={styles.modalTitle}>Book a Measurement</h3>
            <p className={styles.modalSubtitle}>Fill in the form and we will contact you to schedule a date and time for the measurement</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="req-name">Your Name</label>
                <input
                  id="req-name"
                  type="text"
                  placeholder="How should we call you"
                  className={styles.textInput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="req-phone">Phone *</label>
                <input
                  id="req-phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className={`${styles.textInput} ${error ? styles.inputError : ""}`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {error && <div className={styles.errorMsg}>{error}</div>}

              <button type="submit" className={styles.submitBtn}>
                Submit Request
              </button>

              <div className={styles.footnotes}>
                <span>— Free visit of the measurement engineer</span>
                <span>— Consultation and exact estimation on site</span>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Request successfully accepted!</h3>
            <p className={styles.successText}>
              Thank you for contacting us! Our specialist will contact you within 15 minutes to clarify details.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setName("");
                setPhone("");
                onClose();
              }}
              className={styles.okBtn}
            >
              Excellent
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
