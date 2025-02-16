"use client";
import { useState } from "react";
import { CardWithForm } from "./testCard";
import { Button } from "@/components/ui/button";
import styles from "./floatingActionButton.module.css";

export default function FloatingActionButton() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isPopupVisible ? (
        <Button onClick={togglePopup} variant="destructive">
          Close
        </Button>
      ) : (
        <Button onClick={togglePopup} variant="default">
          Open
        </Button>
      )}

      <div
        className={`${styles.popup} ${isPopupVisible ? styles.visible : ""}`}
      >
        <CardWithForm />
      </div>
    </div>
  );
}
