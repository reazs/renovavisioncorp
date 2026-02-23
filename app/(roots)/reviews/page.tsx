"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, CheckCircleIcon, Quote } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

interface Review {
  _id: string;
  name: string;
  project: string;
  rating: number;
  review: string;
  completionDate: string;
  createdAt: string;
  updatedAt: string;
}

export default function TopReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/review");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(
          "An error occurred while fetching reviews. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="mx-auto px-4 py-12 max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-2 text-balance">Top Customer Reviews</h1>
        <p className="text-muted-foreground mb-8">Hear from our satisfied clients and their experiences with our work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto px-4 py-12 max-w-screen-xl">
        <h1 className="text-4xl font-bold mb-6">Top Reviews</h1>
        <Card className="border-destructive/50">
          <CardContent className="p-6">
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fiveStarReviews = reviews.filter((review) => review.rating === 5).slice(0, 3);

  return (
    <section className="mx-auto px-4 py-12 max-w-screen-xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-balance">Top Customer Reviews</h1>
        <p className="text-muted-foreground text-lg">Hear from our satisfied clients and their experiences with our work</p>
      </div>
      
      {fiveStarReviews.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No 5-star reviews found yet. Check back soon!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiveStarReviews.map((review) => (
            <Card key={review._id} className="flex flex-col h-full hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/60"></div>
              
              <CardHeader className="pb-3">
                <div className="flex gap-2 mb-3">
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <CheckCircleIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                </div>
                <CardTitle className="text-lg leading-tight">{review.name}</CardTitle>
                <Badge variant="secondary" className="w-fit mt-2">{review.project}</Badge>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col pb-4">
                <div className="flex gap-3 flex-1">
                  <Quote className="h-5 w-5 text-primary/40 flex-shrink-0 mt-1" />
                  <p className="text-card-foreground leading-relaxed flex-1">{review.review}</p>
                </div>
              </CardContent>

              <div className="border-t border-border pt-3 px-6 pb-3">
                <div className="flex justify-between text-xs text-muted-foreground gap-4">
                  <span>📅 Completed: {review.completionDate}</span>
                  <span>Posted: {new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
