import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GetStartedForm from '@/components/GetStartedForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <Header showNavLinks={false} />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Card className="bg-white shadow-lg border-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Get Started with H1B Career Advisor</CardTitle>
              <CardDescription>Please provide your information to receive personalized career advice.</CardDescription>
            </CardHeader>
            <CardContent>
              <GetStartedForm />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}