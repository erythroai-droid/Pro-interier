"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./CalculatorModal.module.css";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  const [area, setArea] = useState<string>("");
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [fixtures, setFixtures] = useState<string>("0");
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

  // Pricing calculations
  const areaNum = parseFloat(area) || 0;
  const fixturesNum = parseInt(fixtures) || 0;
  const basePrice = areaNum * 800;
  
  // Perimeter calculation: roughly 4 * sqrt(area), rounded to 1 decimal place (decimeters)
  const perimeter = areaNum > 0 ? Math.round(4 * Math.sqrt(areaNum) * 10) / 10 : 0;
  const shadowPrice = hasShadow ? perimeter * 700 : 0;
  const fixturesPrice = fixturesNum * 400;
  
  const totalPrice = basePrice + shadowPrice + fixturesPrice;

  const handleClear = () => {
    setArea("");
    setHasShadow(false);
    setFixtures("0");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Please fill in your phone number");
      return;
    }
    setError("");
    
    // Simulate API request
    console.log("Submit request:", {
      type: "Calculator Request",
      area: areaNum,
      hasShadow,
      fixtures: fixturesNum,
      estimatedPrice: totalPrice,
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
            <h3 className={styles.modalTitle}>Calculation Parameters</h3>
            <p className={styles.modalSubtitle}>3 steps — area, profile, lights</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Step 1: Area */}
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>1</span>
                  <label className={styles.stepLabel} htmlFor="calc-area">
                    White matte ceiling + installation, m²
                  </label>
                </div>
                <input
                  id="calc-area"
                  type="number"
                  className={styles.inputField}
                  placeholder="E.g., 15"
                  value={area}
                  min="0"
                  step="any"
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              {/* Step 2: Shadow profile */}
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>2</span>
                  <span className={styles.stepLabel}>Shadow gap profile + installation</span>
                </div>
                <div className={styles.toggleGroup}>
                  <button
                    type="button"
                    className={`${styles.toggleBtn} ${!hasShadow ? styles.activeToggle : ""}`}
                    onClick={() => setHasShadow(false)}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={`${styles.toggleBtn} ${hasShadow ? styles.activeToggle : ""}`}
                    onClick={() => setHasShadow(true)}
                  >
                    Yes
                  </button>
                </div>
              </div>

              {/* Step 3: Fixtures */}
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>3</span>
                  <label className={styles.stepLabel} htmlFor="calc-fixtures">
                    Lamp fixtures, pcs.
                  </label>
                </div>
                <input
                  id="calc-fixtures"
                  type="number"
                  className={styles.inputField}
                  value={fixtures}
                  min="0"
                  onChange={(e) => setFixtures(e.target.value)}
                />
              </div>

              {/* Estimation and Clear */}
              <div className={styles.resultContainer}>
                <div className={styles.priceBox}>
                  <div className={styles.priceLabel}>Estimated Cost</div>
                  <div className={styles.priceValue}>
                    ${totalPrice.toLocaleString("en-US")}
                  </div>
                  <div className={styles.priceHint}>
                    Exact price — after measurement and estimation agreement
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.clearBtn}
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>

              <div className={styles.offerText}>
                Sign up for measurement and consultation. Get up to 10% discount upon contract signing.
              </div>

              {/* Lead capture form */}
              <div className={styles.leadSection}>
                <h4 className={styles.leadTitle}>Save Calculation</h4>
                
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="calc-name">Name</label>
                    <input
                      id="calc-name"
                      type="text"
                      placeholder="Your name"
                      className={styles.textInput}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="calc-phone">Phone *</label>
                    <input
                      id="calc-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className={`${styles.textInput} ${error ? styles.inputError : ""}`}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {error && <div className={styles.errorMsg}>{error}</div>}

                <button type="submit" className={styles.submitBtn}>
                  Submit Request
                </button>

                <div className={styles.leadFootnotes}>
                  <span>— We'll call back in 15 minutes</span>
                  <span>— Help with extra services calculation</span>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Request successfully sent!</h3>
            <p className={styles.successText}>
              We have saved your preliminary calculation for{" "}
              <strong>${totalPrice.toLocaleString("en-US")}</strong>.
            </p>
            <p className={styles.successText}>
              Our specialist will contact you within 15 minutes to confirm details and book a free measurement.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                handleClear();
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
