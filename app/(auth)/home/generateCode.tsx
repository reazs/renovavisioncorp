"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, RefreshCw, Save } from "lucide-react";
// this generate the code
const GenerateCode: React.FC = () => {  
  
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const generateRandomSixDigitNumber = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleGenerateCode = () => {
    const newCode = generateRandomSixDigitNumber();
    setGeneratedCode(newCode);
    setMessage({
      type: "success",
      text: "A new 6-digit code has been generated.",
    });
  };

  const handleCodeSaved = async () => {
    if (!generatedCode) {
      setMessage({
        type: "error",
        text: "Please generate a code before saving.",
      });
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch("/api/verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: generatedCode }),
      });

      if (res.status === 201) {
        setMessage({
          type: "success",
          text: "The verification code has been successfully saved.",
        });
      } else if (res.status === 409) {
        setMessage({
          type: "error",
          text: "This code already exists. Please generate a new one.",
        });
      } else {
        throw new Error("Failed to save the code");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "There was an issue saving the code. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const copyToClipboard = async () => {
    if (!generatedCode) {
      setMessage({ type: "error", text: "No code to copy." });
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedCode);
      setMessage({
        type: "success",
        text: "The code has been copied to your clipboard.",
      });
    } catch (err) {
      setMessage({
        type: "error",
        text: "Failed to copy the code. Please try again.",
      });
    }
  };

  return (
    <div className="h-[60vh] flex justify-center items-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Generate Verification Code</CardTitle>
          <CardDescription>
            Create a unique 6-digit code for verification purposes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Inline message display */}
          {message.text && (
            <p
              className={`text-center text-sm ${
                message.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message.text}
            </p>
          )}
          {/* Input with red border on error */}
          <div className="flex space-x-2">
            <Input
              value={generatedCode}
              readOnly
              placeholder="Generated code will appear here"
              className={`text-center font-mono ${
                message.type === "error"
                  ? "border-red-500 focus:ring-red-500"
                  : ""
              }`}
              onClick={copyToClipboard}
              title="Click to copy"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              disabled={!generatedCode}
              title="Copy to clipboard"
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
          <Button onClick={handleGenerateCode} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate New Code
          </Button>
          <Button
            onClick={handleCodeSaved}
            className="w-full"
            variant="outline"
            disabled={isSaving || !generatedCode}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Code"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateCode;
