"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { put } from "@vercel/blob";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  X,
  Image as ImageIcon,
} from "lucide-react";

export default function EnhancedImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFile(file);
    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
    setNotification({ type: null, message: "" });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    multiple: false,
  });

  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);
    setUploadProgress(0);
    setNotification({ type: null, message: "" });

    try {
      // Simulate progress while uploading
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      const blob = await put(file.name, file, {
        access: "public",
      });

      clearInterval(progressInterval);
      setUploadProgress(100);
      setUploadedUrl(blob.url);
      setNotification({
        type: "success",
        message: "Your image has been uploaded successfully.",
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setNotification({
        type: "error",
        message: "There was an error uploading your image. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };
  const clearFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setUploadedUrl(null);
    setUploadProgress(0);
    setNotification({ type: null, message: "" });
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      {notification.type && (
        <Alert
          variant={notification.type === "success" ? "default" : "destructive"}
          className="mb-4"
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertTitle>
            {notification.type === "success" ? "Success" : "Error"}
          </AlertTitle>
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      )}

      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        {previewUrl ? (
          <div className="relative aspect-square w-full">
            <img
              src={previewUrl}
              alt="Preview"
              className="rounded-md object-cover w-full h-full"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-2 right-2"
              onClick={(e) => {
                e.stopPropagation();
                clearFile();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48">
            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag & drop an image here, or click to select one
            </p>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-500">Selected file: {file.name}</p>
          <Button onClick={uploadFile} disabled={uploading} className="w-full">
            {uploading ? "Uploading..." : "Upload"}
          </Button>
          {uploading && <Progress value={uploadProgress} className="w-full" />}
        </div>
      )}

      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Uploaded image:</p>
          <img
            src={uploadedUrl}
            alt="Uploaded file"
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </Card>
  );
}
