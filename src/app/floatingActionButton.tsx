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

  const callApiRoute = async () => {
    console.log("I am clicked");
    try {
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isPopupVisible ? (
        <Button onClick={togglePopup} variant="destructive">
          Close
        </Button>
      ) : (
        <Button onClick={togglePopup} variant="default">
          Ask Saihl
        </Button>
      )}

      <div
        className={`${styles.popup} ${isPopupVisible ? styles.visible : ""}`}
      >
        <CardWithForm />
        <Button onClick={callApiRoute}>Call API</Button>
      </div>
    </div>
  );
}
