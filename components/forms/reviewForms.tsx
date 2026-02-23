"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { reviewFormSchema } from "@/lib/zodSchema/reviewSchema";
import projects from "@/data/project";

export default function ReviewForm({ code }: { code: number }) {
  const [rating, setRating] = useState(0);
  const { user } = useUser();
  const router = useRouter(); // Initialize useRouter

  const form = useForm<z.infer<typeof reviewFormSchema>>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: user?.fullName || "",
      project: "",
      rating: 0,
      review: "",
      completionDate: "",
      code: code,
    },
  });

  async function onSubmit(values: z.infer<typeof reviewFormSchema>) {
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 201) {
        const data = await res.json();
        console.log("Review saved:", data);
        router.push("/reviews"); // Redirect to the review page
      } else {
        const error = await res.json();
        console.error("Failed to save review:", error.message || res.status);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }

  if (!user) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-2xl mx-auto border-none shadow-none">
          <CardHeader>
            <CardTitle>Leave a Review</CardTitle>
            <CardDescription>
              Share your experience with our construction services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Home Renovation, Commercial Building, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Rating</FormLabel>
                    <FormControl>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Button
                            key={star}
                            type="button"
                            variant="ghost"
                            size="sm"
                            className={`p-0 ${
                              rating >= star
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => {
                              setRating(star);
                              field.onChange(star);
                            }}
                          >
                            <Star className="h-6 w-6 fill-current" />
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your experience..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Completion Date</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less-than-month">
                          Less than a month ago
                        </SelectItem>
                        <SelectItem value="1-3-months">
                          1-3 months ago
                        </SelectItem>
                        <SelectItem value="3-6-months">
                          3-6 months ago
                        </SelectItem>
                        <SelectItem value="6-12-months">
                          6-12 months ago
                        </SelectItem>
                        <SelectItem value="over-year">
                          Over a year ago
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
